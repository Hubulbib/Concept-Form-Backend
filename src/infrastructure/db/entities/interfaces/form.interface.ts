import { Form } from '../form.entity.js'
import { AnswerEntity } from '../../../../core/entities/answer.entity.js'

export interface IForm extends Omit<Form, 'answers'> {
  answers: AnswerEntity[]
}
