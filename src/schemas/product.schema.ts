import { sanitezeAmountToDB } from '@/utils'

const MapperType = {
  Digital: 'ysBMBpptPPRtdKK47uZC',
  Física: 'QG6de4lwB7ViyNGYXfvY'
}

const MapperPlatform = {
  'Playstation 5': '1oeW31SqUJQNdSEVWKeL',
  Switch: 'uQp8MY9NttLIHveChWzf',
  '3DS': 'BD4CTGYgHzuJCRlyFU25',
  PS4: 'Dbt8a6rOOw9M8St6mh8h',
  'Game Boy Color': 'myUAvPjohwppFd9eLZWs',
  'Super Nintendo': 'zHZlibFOiAKKA00ByDHd',
  Amiibo: 'oVhjLSzkXd2S4BeaEEnX'
}

const MapperStatuses = {
  Finalizado: 'UzwXRv5JzalWelwlSkN4',
  'Em Andamento': '3eB6uouNmZx1DgtwY5Jh',
  Abandonado: 'jVLBsUwrUGnlcoSFOzqm',
  '': 'NUgTEwhwtd3HFlozHJSL'
}

export interface IProduct {
  name: string
  imageUrl: string
  type: string
  platform: string
  amount: string
  status: string
  classification: number
  description: string
}

export class ProductSchema {
  constructor(private readonly product: IProduct) {}

  get name() {
    return this.product.name ?? ''
  }

  get imageUrl() {
    return this.product.imageUrl ?? ''
  }

  get type() {
    return MapperType[this.product.type as keyof typeof MapperType]
  }

  get platform() {
    return MapperPlatform[this.product.platform as keyof typeof MapperPlatform]
  }

  get amount() {
    return sanitezeAmountToDB(this.product.amount)
  }

  get status() {
    return MapperStatuses[this.product.status as keyof typeof MapperStatuses] ?? MapperStatuses['']
  }

  get classification() {
    return this.product.classification ?? 0
  }

  get description() {
    return this.product.description ?? ''
  }
}
