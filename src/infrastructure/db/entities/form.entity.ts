import { getModelForClass, modelOptions, prop, PropType, Severity } from '@typegoose/typegoose'
import { tsUnix } from '../../utils/date.util.js'
import { genUuid } from '../../utils/generate.util.js'

@modelOptions({ schemaOptions: { _id: false }, options: { allowMixed: Severity.ALLOW } })
export class HierarchyLayoutNode {
  @prop({ type: Object, default: {} }, PropType.MAP)
  styles: Record<string, any>

  @prop({ type: Object, default: {} }, PropType.MAP)
  attributes: Record<string, any>

  @prop({ type: Object, default: {} }, PropType.MAP)
  children: Record<string, HierarchyLayoutNode>
}

@modelOptions({ schemaOptions: { _id: false } })
class Layout {
  @prop({ type: () => HierarchyLayoutNode, required: true })
  root: HierarchyLayoutNode
}

@modelOptions({ schemaOptions: { _id: false } })
class Question {
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
  schemaOptions: { collection: 'forms' },
  options: { allowMixed: Severity.ALLOW },
})
export class Form {
  @prop({ type: String, required: true, default: () => genUuid(), unique: true })
  formId: string

  @prop({ type: String, required: true })
  userId: string

  @prop({ type: () => Layout, default: { root: { styles: {}, children: {}, attributes: {} } }, required: true })
  layout: Layout

  @prop({ type: () => [Question], default: [], required: true })
  questions: Question[]

  @prop({ type: () => [String], default: [], required: true })
  answers: string[]

  @prop({ type: String, required: false })
  name?: string

  @prop({ type: () => BaseDates, default: {}, required: true, _id: false })
  dates: BaseDates
}

export const formModel = getModelForClass(Form)
