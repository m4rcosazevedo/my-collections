import { db } from '@/config/firebase'
import { collection, DocumentData, getDocs, Query } from 'firebase/firestore'

export class StatusesService {
  public constructor(
    private readonly service: Query<DocumentData, DocumentData>,
    private readonly get: typeof getDocs
  ) {}

  async getAll(): Promise<StatusCollection[]> {
    const snapshot = await this.get(this.service)
    return snapshot.docs.map((doc: DocumentData) => ({
      id: doc.id,
      ...doc.data()
    })) as StatusCollection[]
  }

  async getAllMap(): Promise<Map<string, string>> {
    const statusesMap = new Map<string, string>()

    const snapshot = await this.get(this.service)
    snapshot.forEach((doc: DocumentData) => {
      statusesMap.set(doc.id, doc.data().name)
    })
    return statusesMap
  }
}

export const makeStatusesService = () => {
  return new StatusesService(collection(db, 'statuses'), getDocs)
}

export const makeStatusesServiceGetAll = () => {
  return makeStatusesService().getAll()
}

export const makeStatusesServiceGetAllMap = () => {
  return makeStatusesService().getAllMap()
}
