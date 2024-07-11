export const HierarchyLayoutNode = {
  type: 'object',
  properties: {
    styles: {
      type: 'object',
      additionalProperties: true,
    },
    attributes: {
      type: 'object',
      additionalProperties: true,
    },
    children: {
      type: 'object',
      additionalProperties: {
        $ref: '#/components/schemas/HierarchyLayoutNode',
      },
    },
  },
}
