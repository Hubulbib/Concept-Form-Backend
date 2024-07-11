export const FormCreateBodyDto = {
  type: 'object',
  properties: {
    userId: {
      type: 'string',
      description: 'User ID',
    },
    layout: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/LayoutItem',
      },
    },
    questions: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/Question',
      },
    },
    name: {
      type: 'string',
      description: 'Form name',
      nullable: true,
    },
  },
}
