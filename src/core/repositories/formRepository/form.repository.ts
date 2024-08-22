import { type FormEntity } from '../../entities/form.entity.js'
import { HierarchyLayout, Layout } from '../../entities/layout.entity'

export interface FormRepository {
  getAll: (userId: string) => Promise<FormEntity[]>
  getOneById: (formId: string, userId: string) => Promise<Omit<FormEntity, 'layout'>>
  getLayout: (formId: string) => Promise<Layout>
  createOne: (createBody: { layout: HierarchyLayout; userId: string; name?: string }) => Promise<FormEntity>
  editOne: (
    formId: string,
    editBody: {
      layout: HierarchyLayout
      name?: string
    },
    userId: string,
  ) => Promise<void>
  removeOne: (formId: string, userId: string) => Promise<void>
}
