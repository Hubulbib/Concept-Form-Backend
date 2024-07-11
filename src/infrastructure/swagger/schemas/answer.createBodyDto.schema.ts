export const AnswerCreateBodyDto = {
  type: 'object',
  properties: {
    formId: {
      type: 'string',
      description: 'Form ID',
    },
    list: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AnswerList',
      },
    },
  },
}
