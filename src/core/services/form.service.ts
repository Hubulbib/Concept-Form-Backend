import { type FormRepository } from '../repositories/formRepository/form.repository'
import { type EditBodyDto } from '../repositories/formRepository/dtos/edit-body.dto'
import { FormEntity, Layout } from '../entities/form.entity'
import { CreateBodyDto } from '../repositories/formRepository/dtos/create-body.dto'

export class FormService {
  constructor(private readonly formRepository: FormRepository) {}

  getAll = async (): Promise<FormEntity[]> => {
    return await this.formRepository.getAll()
  }

  getOneById = async (formId: string): Promise<Omit<FormEntity, 'layout'>> => {
    return await this.formRepository.getOneById(formId)
  }

  getLayout = async (formId: string): Promise<Layout> => {
    return await this.formRepository.getLayout(formId)
  }

  createOne = async (createBody: CreateBodyDto): Promise<FormEntity> => {
    return await this.formRepository.createOne(createBody)
  }

  editOne = async (formId: string, editBody: EditBodyDto): Promise<void> => {
    return await this.formRepository.editOne(formId, editBody)
  }

  removeOne = async (formId: string): Promise<void> => {
    return await this.formRepository.removeOne(formId)
  }
}
