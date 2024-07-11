export const AnswerEntity = {
  type: 'object',
  properties: {
    answerId: {
      type: 'string',
      description: 'Answer ID',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Creation date',
    },
    list: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AnswerList',
      },
    },
  },
}
