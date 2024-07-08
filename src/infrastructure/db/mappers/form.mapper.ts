import { formModel, type Form } from '../entities/form.entity.js'
import { FormEntity } from '../../../core/entities/form.entity.js'
import { IForm } from '../entities/interfaces/form.interface.js'

export class FormMapper {
  public static toDomain(entity: IForm): FormEntity {
    return new FormEntity(
      entity.formId,
      entity.userId,
      entity.layout,
      entity.questions,
      entity.answers,
      new Date(entity.dates.createdAt),
      new Date(entity.dates.updatedAt),
      entity.name,
    )
  }

  public static toEntity(domain: FormEntity): Form {
    return new formModel({ ...domain })
  }
}
