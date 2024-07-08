import { Question } from '../../../entities/form.entity.js'
import { LayoutItem } from '../../../entities/layout.entity.js'

export class CreateBodyDto {
  constructor(
    readonly userId: string,
    readonly layout: LayoutItem[],
    readonly questions: Question[],
    readonly name?: string,
  ) {}
}
