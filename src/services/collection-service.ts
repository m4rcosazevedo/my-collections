import { db } from '@/config/firebase'
import { collection, DocumentData, getDocs, orderBy, query, Query } from 'firebase/firestore'

export class CollectionService {
  public constructor(
    private readonly service: Query<DocumentData, DocumentData>,
    private readonly get: typeof getDocs
  ) {}

  async getAll(): Promise<Collection[]> {
    const snapshot = await this.get(this.service)
    return snapshot.docs.map((doc: DocumentData) => ({
      id: doc.id,
      ...doc.data()
    })) as Collection[]
  }

  async getAllMap(): Promise<Map<string, string>> {
    const map = new Map<string, string>()

    const snapshot = await this.get(this.service)
    snapshot.forEach((doc: DocumentData) => {
      map.set(doc.id, doc.data().name)
    })
    return map
  }
}

export const makeCollectionService = () => {
  return new CollectionService(query(collection(db, 'collections'), orderBy('name')), getDocs)
}

export const makeCollectionServiceGetAll = () => {
  return makeCollectionService().getAll()
}

export const makeCollectionServiceGetAllMap = () => {
  return makeCollectionService().getAllMap()
}
