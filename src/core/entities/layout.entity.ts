interface LayoutItem {
  name: string
  parent: string
  attributes: Record<string, any>
  styles: Record<string, any>
}
interface HierarchyLayout {
  root: HierarchyLayoutNode
}
interface HierarchyLayoutNode {
  styles: Record<string, any>
  attributes: Record<string, any>
  children: Record<string, HierarchyLayoutNode>
}
class Layout implements HierarchyLayout {
  constructor(readonly root: HierarchyLayoutNode) {}
}

export { LayoutItem, HierarchyLayoutNode, HierarchyLayout, Layout }
