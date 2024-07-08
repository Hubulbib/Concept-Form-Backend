import { AnswerEntity } from './answer.entity.js'
import { Layout } from './layout.entity.js'

export class FormEntity {
  constructor(
    readonly formId: string,
    readonly userId: string,
    readonly layout: Layout,
    readonly questions: Question[],
    readonly answers: AnswerEntity[],
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly name?: string,
  ) {}
}

export class Question {
  constructor(
    readonly number: number,
    readonly text: string,
  ) {}
}

// Layout page class
