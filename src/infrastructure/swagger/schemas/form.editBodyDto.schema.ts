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
    name: {
      type: 'string',
      description: 'Form name',
      nullable: true,
    },
  },
}
