import { Question } from '../../../entities/form.entity.js'
import { LayoutItem } from '../../../entities/layout.entity.js'

export class EditBodyDto {
  constructor(
    readonly layout?: LayoutItem[],
    readonly questions?: Question[],
    readonly name?: string,
  ) {}
}
