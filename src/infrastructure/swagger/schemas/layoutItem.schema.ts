export const LayoutItem = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'Layout item name',
    },
    parent: {
      type: 'string',
      description: 'Parent item',
    },
    attributes: {
      type: 'object',
      additionalProperties: true,
      description: 'Attributes of the layout item',
    },
    styles: {
      type: 'object',
      additionalProperties: true,
      description: 'Styles of the layout item',
    },
  },
}
