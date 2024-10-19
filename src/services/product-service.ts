import { db } from '@/config/firebase'
import { collection, DocumentData, getDocs, orderBy, Query, query, where } from 'firebase/firestore'

export class ProductService {
  public constructor(
    private readonly service: Query<DocumentData, DocumentData>,
    private readonly get: typeof getDocs
  ) {}

  async getProducts(): Promise<ProductCollection[]> {
    const snapshot = await this.get(this.service)
    return snapshot.docs.map((doc: DocumentData) => ({
      id: doc.id,
      ...doc.data()
    })) as ProductCollection[]
  }
}

export const makeProductServiceGetProducts = (collectionUuid: string) => {
  const productRef = new ProductService(
    query(
      collection(db, 'products'),
      where('collection', '==', collectionUuid),
      orderBy('name', 'asc')
    ),
    getDocs
  )

  return productRef.getProducts()
}
