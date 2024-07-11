import { type FormRepository } from '../repositories/formRepository/form.repository.js'
import { type EditBodyDto } from '../repositories/formRepository/dtos/edit-body.dto.js'
import { FormEntity } from '../entities/form.entity.js'
import { CreateBodyDto } from '../repositories/formRepository/dtos/create-body.dto.js'
import { HierarchyLayout, HierarchyLayoutNode, Layout, LayoutItem } from '../entities/layout.entity'

export class FormService {
  constructor(private readonly formRepository: FormRepository) {}

  getAll = async (userId: string): Promise<Omit<FormEntity, 'layout'>[]> => {
    return await this.formRepository.getAll(userId)
  }

  getOneById = async (formId: string, userId: string): Promise<Omit<FormEntity, 'layout'>> => {
    return await this.formRepository.getOneById(formId, userId)
  }

  getLayout = async (formId: string): Promise<Layout> => {
    return await this.formRepository.getLayout(formId)
  }

  createOne = async (createBody: CreateBodyDto): Promise<FormEntity> => {
    return await this.formRepository.createOne({
      ...createBody,
      layout: this.transformArrayToHierarchy(createBody.layout),
    })
  }

  editOne = async (formId: string, editBody: EditBodyDto, userId: string): Promise<void> => {
    return await this.formRepository.editOne(formId, editBody, userId)
  }

  removeOne = async (formId: string, userId: string): Promise<void> => {
    return await this.formRepository.removeOne(formId, userId)
  }

  private transformArrayToHierarchy(arr: LayoutItem[]): HierarchyLayout {
    const hierarchy: HierarchyLayout = { root: { styles: {}, children: {}, attributes: {} } }
    const elementsMap: Record<string, HierarchyLayoutNode> = { root: hierarchy.root }

    for (const { name, parent, styles, attributes } of arr) {
      const newItem: HierarchyLayoutNode = { styles, children: {}, attributes }

      if (!elementsMap[parent]) {
        elementsMap[parent] = { styles: {}, children: {}, attributes: {} }
      }

      elementsMap[parent].children[name] = newItem
      elementsMap[name] = newItem
    }

    return hierarchy
  }
}
