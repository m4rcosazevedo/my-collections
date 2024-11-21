import { db } from '@/config/firebase'
import { collection, DocumentData, getDocs, Query } from 'firebase/firestore'

export class PlatformService {
  public constructor(
    private readonly service: Query<DocumentData, DocumentData>,
    private readonly get: typeof getDocs
  ) {}

  async getAll(): Promise<PlatformCollection[]> {
    const snapshot = await this.get(this.service)
    return snapshot.docs.map((doc: DocumentData) => ({
      id: doc.id,
      ...doc.data()
    })) as PlatformCollection[]
  }

  async getAllMap(): Promise<Map<string, string>> {
    const platformMap = new Map<string, string>()

    const snapshot = await this.get(this.service)
    snapshot.forEach((doc: DocumentData) => {
      if (doc.data().name) {
        platformMap.set(doc.id, doc.data().name)
      }
    })
    return platformMap
  }
}

export const makePlatformService = () => {
  return new PlatformService(collection(db, 'platforms'), getDocs)
}

export const makePlatformServiceGetAll = () => {
  return makePlatformService().getAll()
}

export const makePlatformServiceGetAllMap = () => {
  return makePlatformService().getAllMap()
}
