import { ProductDashboard } from '@/pages/home'

export function calculateDashboardStats(items: ProductDashboard) {
  const stats = {
    maxAmount: 0,
    maxAmountPlatform: '',
    maxAmountType: '',
    maxQuantity: 0,
    maxQuantityPlatform: '',
    maxQuantityType: '',
    totalPhysicalMedia: 0,
    totalPhysicalMediaAmiibo: 0,
    totalDigitalMedia: 0,
    amountPhysicalMedia: 0,
    amountPhysicalMediaAmiibo: 0,
    amountDigitalMedia: 0
  }

  for (const [platformName, types] of Object.entries(items)) {
    for (const [typeName, { amount, quantity }] of Object.entries(types)) {
      if (amount > stats.maxAmount) {
        stats.maxAmount = amount
        stats.maxAmountPlatform = platformName
        stats.maxAmountType = typeName
      }

      if (quantity > stats.maxQuantity) {
        stats.maxQuantity = quantity
        stats.maxQuantityPlatform = platformName
        stats.maxQuantityType = typeName
      }

      const isPhysicalMedia = typeName === 'Mídia Física'
      const isDigitalMedia = typeName === 'Mídia Digital'
      const isAmiibo = isPhysicalMedia && platformName === 'Amiibo'

      if (isPhysicalMedia) {
        if (isAmiibo) {
          stats.totalPhysicalMediaAmiibo += quantity
          stats.amountPhysicalMediaAmiibo += amount
        } else {
          stats.amountPhysicalMedia += amount
          stats.totalPhysicalMedia += quantity
        }
      }

      if (isDigitalMedia) {
        stats.totalDigitalMedia += quantity
        stats.amountDigitalMedia += amount
      }
    }
  }

  return stats
}
