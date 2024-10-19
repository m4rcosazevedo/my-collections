interface ProductCollection extends BaseCollection {
  amount: number
  classification: number
  description?: string
  image: string
  collection: string
  platform?: string
  status?: string
  type?: string
}

interface ProductData extends ProductCollection {
  platformName: PlatformCollection
  statusName: StatusCollection
  typeName: TypeCollection
}
