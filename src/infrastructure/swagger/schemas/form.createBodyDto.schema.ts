export const FormCreateBodyDto = {
  type: 'object',
  properties: {
    layout: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/LayoutItem',
      },
    },
    name: {
      type: 'string',
      description: 'Form name',
      nullable: true,
    },
  },
}
