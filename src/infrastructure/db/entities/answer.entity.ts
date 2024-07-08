import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose'
import { tsUnix } from '../../utils/date.util.js'
import { genUuid } from '../../utils/generate.util.js'

@modelOptions({ schemaOptions: { _id: false } })
class AnswerList {
  @prop({ type: Number, required: true })
  number: number

  @prop({ type: String, required: true })
  text: string
}

class BaseDates {
  @prop({ type: Number, default: () => tsUnix() })
  createdAt: number

  @prop({ type: Number, default: () => tsUnix() })
  updatedAt: number
}

@modelOptions({
  schemaOptions: { collection: 'answers' },
  options: {
    customName: 'answers',
  },
})
export class Answer {
  @prop({ type: String, required: true, default: () => genUuid(), unique: true })
  answerId: string

  @prop({ type: String, required: true })
  formId: string

  @prop({ type: [AnswerList], default: [], required: true })
  list: AnswerList[]

  @prop({ type: () => BaseDates, default: {}, required: true, _id: false })
  dates: BaseDates
}

export const answerModel = getModelForClass(Answer)
