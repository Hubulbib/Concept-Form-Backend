import { LayoutItem } from '../../../entities/layout.entity.js'

export class EditBodyDto {
  constructor(
    readonly layout?: LayoutItem[],
    readonly name?: string,
  ) {}
}
