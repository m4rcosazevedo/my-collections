import { ProductDashboard } from '@/pages/home'

export function calculateDashboardStats(items: ProductDashboard) {
  let maxAmountPlatform = null
  let maxAmountType = null
  let maxAmount = 0

  let maxQuantityPlatform = null
  let maxQuantityType = null
  let maxQuantity = 0

  let totalPhysicalMedia = 0
  let totalDigitalMedia = 0
  let amountPhysicalMedia = 0
  let amountDigitalMedia = 0

  Object.keys(items).forEach(platformName => {
    Object.keys(items[platformName]).forEach(typeName => {
      const { amount, quantity } = items[platformName][typeName]

      if (amount > maxAmount) {
        maxAmount = amount
        maxAmountPlatform = platformName
        maxAmountType = typeName
      }

      if (quantity > maxQuantity) {
        maxQuantity = quantity
        maxQuantityPlatform = platformName
        maxQuantityType = typeName
      }

      totalPhysicalMedia += typeName === 'Mídia Física' ? quantity : 0
      amountPhysicalMedia += typeName === 'Mídia Física' ? amount : 0

      totalDigitalMedia += typeName === 'Mídia Digital' ? quantity : 0
      amountDigitalMedia += typeName === 'Mídia Digital' ? amount : 0
    })
  })

  return {
    maxAmountPlatform,
    maxAmountType,
    maxAmount,
    maxQuantityPlatform,
    maxQuantityType,
    maxQuantity,
    totalPhysicalMedia,
    totalDigitalMedia,
    amountPhysicalMedia,
    amountDigitalMedia
  }
}
