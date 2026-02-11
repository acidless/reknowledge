import type { Node } from "./types";

export abstract class NotesController {
    public abstract getChildren(node?: Node): Promise<Node[]>;
    public abstract saveNode(node: Node): Promise<void>;
    public abstract deleteNode(node: Node): Promise<void>;
    public abstract searchNodes(query: string): Promise<Node[]>;
};
