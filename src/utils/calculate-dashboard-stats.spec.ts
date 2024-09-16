import { calculateDashboardStats } from './calculate-dashboard-stats'

describe('calculateDashboardStats', () => {
  it('should calculate the correct dashboard stats', () => {
    const items = {
      Platform1: {
        'Mídia Física': { amount: 100, quantity: 10 },
        'Mídia Digital': { amount: 200, quantity: 20 }
      },
      Platform2: {
        'Mídia Física': { amount: 300, quantity: 30 },
        'Mídia Digital': { amount: 400, quantity: 40 }
      }
    }

    const result = calculateDashboardStats(items)

    expect(result).toEqual({
      maxAmountPlatform: 'Platform2',
      maxAmountType: 'Mídia Digital',
      maxAmount: 400,
      maxQuantityPlatform: 'Platform2',
      maxQuantityType: 'Mídia Digital',
      maxQuantity: 40,
      totalPhysicalMedia: 40,
      totalDigitalMedia: 60,
      amountPhysicalMedia: 400,
      amountDigitalMedia: 600
    })
  })

  it('should handle empty items', () => {
    const items = {}

    const result = calculateDashboardStats(items)

    expect(result).toEqual({
      maxAmountPlatform: null,
      maxAmountType: null,
      maxAmount: 0,
      maxQuantityPlatform: null,
      maxQuantityType: null,
      maxQuantity: 0,
      totalPhysicalMedia: 0,
      totalDigitalMedia: 0,
      amountPhysicalMedia: 0,
      amountDigitalMedia: 0
    })
  })

  it('should handle items with zero amounts and quantities', () => {
    const items = {
      Platform1: {
        'Mídia Física': { amount: 0, quantity: 0 },
        'Mídia Digital': { amount: 0, quantity: 0 }
      }
    }

    const result = calculateDashboardStats(items)

    expect(result).toEqual({
      maxAmountPlatform: null,
      maxAmountType: null,
      maxAmount: 0,
      maxQuantityPlatform: null,
      maxQuantityType: null,
      maxQuantity: 0,
      totalPhysicalMedia: 0,
      totalDigitalMedia: 0,
      amountPhysicalMedia: 0,
      amountDigitalMedia: 0
    })
  })
})
