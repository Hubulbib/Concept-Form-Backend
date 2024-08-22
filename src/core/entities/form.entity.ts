import { AnswerEntity } from './answer.entity.js'
import { Layout } from './layout.entity.js'

export class FormEntity {
  constructor(
    readonly formId: string,
    readonly userId: string,
    readonly layout: Layout,
    readonly answers: AnswerEntity[],
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly name?: string,
  ) {}
}
