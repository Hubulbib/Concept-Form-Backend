import { type FormEntity, Question } from '../../entities/form.entity.js'
import { type EditBodyDto } from './dtos/edit-body.dto.js'
import { HierarchyLayout, Layout } from '../../entities/layout.entity'

export interface FormRepository {
  getAll: (userId: string) => Promise<FormEntity[]>
  getOneById: (formId: string, userId: string) => Promise<Omit<FormEntity, 'layout'>>
  getLayout: (formId: string) => Promise<Layout>
  createOne: (createBody: {
    layout: HierarchyLayout
    readonly questions: Question[]
    readonly name?: string
    readonly userId: string
  }) => Promise<FormEntity>
  editOne: (formId: string, editBody: EditBodyDto, userId: string) => Promise<void>
  removeOne: (formId: string, userId: string) => Promise<void>
}
