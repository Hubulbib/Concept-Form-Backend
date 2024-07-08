export class AnswerEntity {
  constructor(
    readonly answerId: string,
    readonly createdAt: Date,
    readonly list: AnswerList[],
  ) {}
}

export class AnswerList {
  constructor(
    readonly number: number,
    readonly text: string,
  ) {}
}
