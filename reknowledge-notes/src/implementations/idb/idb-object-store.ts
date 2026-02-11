import { IDBPDatabase } from 'idb';

export class IDBObjectStore {
    public constructor(db: IDBPDatabase, name: string) {
        if (!db.objectStoreNames.contains(name)) {
            const store = db.createObjectStore(name, { keyPath: 'id', autoIncrement: true });
            store.createIndex('parent', 'parent');
        }
    }
}