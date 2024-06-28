import { type FormEntity, Layout } from '../../entities/form.entity.js'
import { type EditBodyDto } from './dtos/edit-body.dto.js'
import { CreateBodyDto } from './dtos/create-body.dto.js'

export interface FormRepository {
  getAll: () => Promise<FormEntity[]>
  getOneById: (formId: string) => Promise<Omit<FormEntity, 'layout'>>
  getLayout: (formId: string) => Promise<Layout>
  createOne: (createBody: CreateBodyDto) => Promise<FormEntity>
  editOne: (formId: string, editBody: EditBodyDto) => Promise<void>
  removeOne: (formId: string) => Promise<void>
}
