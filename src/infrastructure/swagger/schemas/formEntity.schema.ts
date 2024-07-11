export const FormEntity = {
  type: 'object',
  properties: {
    formId: {
      type: 'string',
      description: 'Form ID',
    },
    userId: {
      type: 'string',
      description: 'User ID',
    },
    layout: {
      $ref: '#/components/schemas/Layout',
    },
    questions: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/Question',
      },
    },
    answers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AnswerEntity',
      },
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Creation date',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Last update date',
    },
    name: {
      type: 'string',
      description: 'Form name',
      nullable: true,
    },
  },
}
