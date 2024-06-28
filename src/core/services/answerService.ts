import { AnswerRepository } from '../repositories/answerRepository/answer.repository'
import { CreateBodyDto } from '../repositories/answerRepository/dtos/create-body.dto'
import { AnswerEntity } from '../entities/answer.entity'

export class AnswerService {
  constructor(private readonly answerRepository: AnswerRepository) {}

  createOne = async (createBody: CreateBodyDto): Promise<AnswerEntity> => {
    return await this.answerRepository.createOne(createBody)
  }
}
