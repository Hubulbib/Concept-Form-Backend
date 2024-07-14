export const FormEditBodyDto = {
  type: 'object',
  properties: {
    layout: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/LayoutItem',
      },
      nullable: true,
    },
    questions: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/Question',
      },
      nullable: true,
    },
    name: {
      type: 'string',
      description: 'Form name',
      nullable: true,
    },
  },
}
