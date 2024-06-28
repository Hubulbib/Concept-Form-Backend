import { Layout, Question } from '../../../entities/form.entity'

export class CreateBodyDto {
  constructor(
    readonly userId: string,
    readonly layout: Layout,
    readonly questions: Question[],
    readonly name?: string,
  ) {}
}
