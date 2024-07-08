import { Answer, answerModel } from '../entities/answer.entity.js'
import { AnswerEntity } from '../../../core/entities/answer.entity.js'

export class AnswerMapper {
  public static toDomain(entity: Answer): AnswerEntity {
    return new AnswerEntity(entity.answerId, new Date(entity.dates.createdAt), entity.list)
  }

  public static toEntity(domain: AnswerEntity): Answer {
    return new answerModel({ ...domain })
  }
}
