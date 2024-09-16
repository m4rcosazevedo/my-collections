import { ProductDashboard } from '@/pages/home'

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
            amount: products.reduce((acc, product) => {
              if (product.platform === platform.name && product.type === type.name) {
                return acc + product.amount
              }
              return acc
            }, 0)
          }
        }
      }
    })
  })

  return items
}
