import { ProductDashboard } from '@/pages/home'
import { preciseSum } from './sum-helpers'

export function generateProductData(
  types: TypeCollection[],
  platforms: PlatformCollection[],
  products: ProductCollection[]
): ProductDashboard {
  let items: ProductDashboard = {}

  types.forEach(type => {
    platforms.forEach(platform => {
      items = {
        ...items,
        [platform.name]: {
          ...items[platform.name],
          [type.name]: {
            quantity: products.filter(
              product => product.platform === platform.name && product.type === type.name
            ).length,
            amount: preciseSum(
              ...products.reduce<number[]>((acc, item) => {
                if (item.platform === platform.name && item.type === type.name) {
                  acc.push(item.amount)
                }
                return acc
              }, [])
            )
          }
        }
      }
    })
  })

  return items
}
