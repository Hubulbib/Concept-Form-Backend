import { AnswerList } from '../../../entities/answer.entity'

export class CreateBodyDto {
  constructor(
    readonly formId: string,
    readonly list: AnswerList[],
  ) {}
}
