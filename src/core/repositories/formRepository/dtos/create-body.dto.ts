import { LayoutItem } from '../../../entities/layout.entity.js'

export class CreateBodyDto {
  constructor(
    readonly userId: string,
    readonly layout: LayoutItem[],
    readonly name?: string,
  ) {}
}
