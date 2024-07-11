export const Question = {
  type: 'object',
  properties: {
    number: {
      type: 'integer',
      description: 'Question number',
    },
    text: {
      type: 'string',
      description: 'Question text',
    },
  },
}
