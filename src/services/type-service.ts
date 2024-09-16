import { db } from '@/config/firebase'
import { collection, DocumentData, getDocs, Query } from 'firebase/firestore'

export class TypeService {
  public constructor(
    private readonly service: Query<DocumentData, DocumentData>,
    private readonly get: typeof getDocs
  ) {}

  async getAll(): Promise<TypeCollection[]> {
    const snapshot = await this.get(this.service)
    return snapshot.docs.map((doc: DocumentData) => ({
      id: doc.id,
      ...doc.data()
    })) as TypeCollection[]
  }

  async getAllMap(): Promise<Map<string, string>> {
    const typesMap = new Map<string, string>()

    const snapshot = await this.get(this.service)
    snapshot.forEach((doc: DocumentData) => {
      typesMap.set(doc.id, doc.data().name)
    })
    return typesMap
  }
}

export const makeTypeService = () => {
  return new TypeService(collection(db, 'types'), getDocs)
}

export const makeTypeServiceGetAll = () => {
  return makeTypeService().getAll()
}

export const makeTypeServiceGetAllMap = () => {
  return makeTypeService().getAllMap()
}
