import { openDB, IDBPDatabase } from 'idb';
import { IDBObjectStore } from './idb-object-store';
import { NotesController } from "../../core/notes-controller";
import { Node } from '../../core/types';
import { nodeSatisfiesFilter } from '../../utils';

const storeName = 'notes';

export class IDBNotesController extends NotesController {
    private constructor(private db: IDBPDatabase) {
        super();
    }

    public static async create() {
        if(!indexedDB) {
            throw new Error('IndexedDB is not supported');
        }

        const db = await openDB('database', 1, {
            upgrade(db) {
                new IDBObjectStore(db, storeName);
            },
        });

        return new IDBNotesController(db);
    }

    public async getChildren(node?: Node): Promise<Node[]> {
        if(node) {
            return this.db.getAllFromIndex(storeName, 'parent', node?.id);
        }

        return this.db.getAll(storeName);
    }

    public async saveNode(node: Node): Promise<void> {
        const existingNode = await this.db.get(storeName, node.id);
        if(existingNode) {
            await this.db.put(storeName, node);
        }

        await this.db.add(storeName, node);
    }

    public async deleteNode(node: Node): Promise<void> {
        await this.db.delete(storeName, node.id);
    }

    public async searchNodes(query: string): Promise<Node[]> {
        const allNodes = await this.db.getAll(storeName);
        return allNodes.filter(node => nodeSatisfiesFilter(node, query));
    }
}
