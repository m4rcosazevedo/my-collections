import { db } from '@/config/firebase'
import { doc, DocumentData, DocumentReference, getDoc } from 'firebase/firestore'

export class CollectionServiceId {
  public constructor(
    private readonly service: DocumentReference<DocumentData, DocumentData>,
    private readonly get: typeof getDoc
  ) {}

  async getCollection(): Promise<Collection> {
    const snapshot = await this.get(this.service)

    if (!snapshot.exists()) {
      throw new Error('Coleção não encontrada')
    }

    return {
      id: snapshot.id,
      ...snapshot.data()
    } as Collection
  }
}

export const makeCollectionServiceGetCollectionById = (id: string) => {
  return new CollectionServiceId(doc(db, 'collections', id), getDoc).getCollection()
}
