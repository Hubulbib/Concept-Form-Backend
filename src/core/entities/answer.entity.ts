export class AnswerEntity {
  constructor(
    readonly answerId: string,
    readonly createdAt: Date,
    readonly list: AnswerList[],
  ) {}
}

export class AnswerList {
  constructor(
    readonly number: string,
    readonly text: string,
  ) {}
}
