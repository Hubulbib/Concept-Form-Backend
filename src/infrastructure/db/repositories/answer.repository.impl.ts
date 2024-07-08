import { answerModel } from '../entities/answer.entity.js'
import { AnswerMapper } from '../mappers/answer.mapper.js'
import { AnswerEntity } from '../../../core/entities/answer.entity.js'
import { CreateBodyDto } from '../../../core/repositories/answerRepository/dtos/create-body.dto.js'
import { AnswerRepository } from '../../../core/repositories/answerRepository/answer.repository.js'

export class AnswerRepositoryImpl implements AnswerRepository {
  private readonly answerRepository = answerModel

  async getAll(formId: string): Promise<AnswerEntity[]> {
    return (await this.answerRepository.find({ formId })).map((el) => AnswerMapper.toDomain(el))
  }

  async createOne(createBody: CreateBodyDto): Promise<AnswerEntity> {
    return AnswerMapper.toDomain(await this.answerRepository.create({ ...createBody }))
  }
}
