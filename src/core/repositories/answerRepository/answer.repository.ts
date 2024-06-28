import { AnswerEntity } from '../../entities/answer.entity'
import { CreateBodyDto } from './dtos/create-body.dto'

export interface AnswerRepository {
  createOne: (createBody: CreateBodyDto) => Promise<AnswerEntity>
}
