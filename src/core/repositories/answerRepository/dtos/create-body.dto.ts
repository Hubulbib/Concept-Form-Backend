import { AnswerList } from '../../../entities/answer.entity'

export class CreateBodyDto {
  constructor(
    readonly formId: string,
    readonly number: number,
    readonly text: string,
    readonly list: AnswerList[],
  ) {}
}
