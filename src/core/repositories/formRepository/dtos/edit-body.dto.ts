import { Layout, Question } from '../../../entities/form.entity.js'

export class EditBodyDto {
  constructor(
    readonly layout?: Layout,
    readonly questions?: Question[],
    readonly name?: string,
  ) {}
}
