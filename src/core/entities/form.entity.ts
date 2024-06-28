import { AnswerEntity } from './answer.entity.js'

export class FormEntity {
  constructor(
    readonly formId: string,
    readonly userId: string,
    readonly layout: Layout,
    readonly questions: Question[],
    readonly answers: AnswerEntity[],
    readonly name?: string,
  ) {}
}

export class Question {
  constructor(
    readonly number: number,
    readonly text: string,
  ) {}
}

// Layout page class
interface Hierarchy {
  root: HierarchyNode
}
interface HierarchyNode {
  styles: Record<string, any>
  children: Record<string, HierarchyNode>
}
export class Layout implements Hierarchy {
  constructor(readonly root: HierarchyNode) {}
}
