import { FormMapper } from '../mappers/form.mapper.js'
import { Form, formModel, HierarchyLayoutNode } from '../entities/form.entity.js'
import { AnswerRepositoryImpl } from './answer.repository.impl.js'
import { type FormEntity } from '../../../core/entities/form.entity.js'
import { type FormRepository } from '../../../core/repositories/formRepository/form.repository.js'
import { HierarchyLayout, Layout } from '../../../core/entities/layout.entity.js'
import { ApiError } from '../../exceptions/api.exception.js'
import { tsUnix } from '../../utils/date.util'

export class FormRepositoryImpl implements FormRepository {
  private readonly formRepository = formModel

  async getOneById(formId: string, userId: string): Promise<Omit<FormEntity, 'layout'>> {
    const formById = await this.formRepository.findOne({ formId })
    const formByName = await this.formRepository.findOne({ name: formId })
    if (!formById && !formByName) {
      throw ApiError.NotFound('Данная форма не существует')
    }
    const form = formById || formByName
    if (!form) {
      throw ApiError.NotFound('Данная форма не существует')
    }
    if (form.userId !== userId) {
      throw ApiError.NotAccess('Данная форма не принадлежит вам')
    }
    return FormMapper.toDomain({
      ...this.getAllFields(form, ['layout']),
      answers: await new AnswerRepositoryImpl().getAll(formId),
    })
  }

  async getAll(userId: string): Promise<FormEntity[]> {
    // TODO: fix
    // check what fields must be in front-end in FormList page
    const formList = await this.formRepository.find({ userId })
    const answerList = []
    for (const i of formList) {
      answerList.push(await new AnswerRepositoryImpl().getAll(i.formId))
    }
    let index = 0
    return formList.map((el) =>
      FormMapper.toDomain({ ...this.getAllFields(el, ['layout']), answers: answerList[index++] }),
    )
  }

  async getLayout(formId: string): Promise<Layout> {
    const formById = await this.formRepository.findOne({ formId })
    const formByName = await this.formRepository.findOne({ name: formId })
    if (!formById && !formByName) {
      throw ApiError.NotFound('Данная форма не существует')
    }
    const form = formById || formByName
    return {
      root: {
        styles: this.transformMapToObject(form.layout.root.styles as Map<string, object>),
        children: this.transformMapToObject(form.layout.root.children as unknown as Map<string, HierarchyLayoutNode>),
        attributes: this.transformMapToObject(form.layout.root.attributes as Map<string, object>),
      },
    }
  }

  async createOne(createBody: { layout: HierarchyLayout; userId: string; name?: string }): Promise<FormEntity> {
    const form = await this.formRepository.create({
      userId: createBody.userId,
      layout: createBody.layout,
      name: createBody.name,
    })
    return FormMapper.toDomain({
      ...this.getAllFields(form),
      answers: await new AnswerRepositoryImpl().getAll(form.formId),
    })
  }

  async editOne(
    formId: string,
    editBody: {
      layout: HierarchyLayout
      name?: string
    },
    userId: string,
  ): Promise<void> {
    const form = await this.formRepository.findOne({ formId }).exec()
    if (!form) {
      throw ApiError.NotFound('Данная форма не существует')
    }
    if (form.userId !== userId) {
      throw ApiError.NotAccess('Данная форма не принадлежит вам')
    }
    for (const i in editBody) {
      form[i] = editBody[i]
    }
    form.dates.updatedAt = tsUnix()
    await form.save()
  }

  async removeOne(formId: string, userId: string): Promise<void> {
    const form = await this.formRepository.findOne({ formId }).exec()
    if (!form) {
      throw ApiError.NotFound('Такой формы не существует')
    }
    if (form.userId !== userId) {
      throw ApiError.NotAccess('Данная форма не принадлежит вам')
    }
    await form.deleteOne()
  }

  private transformMapToObject<T, K, V>(map: Map<K, V>): T {
    return Object.fromEntries(map.entries())
  }

  private getAllFields(form: Form, excludeFields: string[] = []) {
    const obj = {
      formId: form.formId,
      userId: form.userId,
      layout: form.layout,
      dates: form.dates,
      name: form.name,
    }
    // Исключаем указанные поля
    excludeFields.forEach((field) => delete obj[field])
    return obj
  }
}
