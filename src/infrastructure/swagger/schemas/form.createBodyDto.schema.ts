export const FormCreateBodyDto = {
  type: 'object',
  properties: {
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
