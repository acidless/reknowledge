type NodeType = 'folder' | 'note';

export interface Node {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    parentId: number | null;
    type: NodeType;
}

export interface Note extends Node {
    content: string;
    relations: Node[];
    type: 'note';
}

export interface Folder extends Node {
    type: 'folder';
}
