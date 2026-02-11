import { Node, Note } from "../core/types";

export function nodeSatisfiesFilter(node: Node, query: string): boolean {
    const queryLower = query.toLowerCase();

    if(node.type === 'note') {
        const note = node as Note;

        return note.content.toLowerCase().includes(queryLower)
            || note.name.toLowerCase().includes(queryLower);
    }

    return false;
}