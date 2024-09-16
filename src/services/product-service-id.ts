import { db } from '@/config/firebase'
import { doc, DocumentData, DocumentReference, getDoc } from 'firebase/firestore'

export class ProductServiceId {
  public constructor(
    private readonly service: DocumentReference<DocumentData, DocumentData>,
    private readonly get: typeof getDoc
  ) {}

  async getProduct(): Promise<ProductCollection> {
    const snapshot = await this.get(this.service)

    if (!snapshot.exists()) {
      throw new Error('Produto não encontrado')
    }

    return {
      id: snapshot.id,
      ...snapshot.data()
    } as ProductCollection
  }
}

export const makeProductServiceGetProductById = (id: string) => {
  const productRef = new ProductServiceId(doc(db, 'products', id), getDoc)

  return productRef.getProduct()
}
