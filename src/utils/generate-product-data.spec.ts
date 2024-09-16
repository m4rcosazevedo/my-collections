import { ProductDashboard } from '@/pages/home'
import { generateProductData } from './generate-product-data'

describe('generateProductData', () => {
  it('should generate correct product data', () => {
    const types: TypeCollection[] = [
      { id: 'midia-fisica', name: 'midia fisica' },
      { id: 'midia-digital', name: 'midia digital' }
    ]

    const platforms: PlatformCollection[] = [
      { id: 'playstation', name: 'playstation' },
      { id: 'xbox', name: 'xbox' },
      { id: 'pc', name: 'pc' },
      { id: 'nintendo', name: 'nintendo' }
    ]

    const products: ProductCollection[] = [
      {
        platform: 'playstation',
        type: 'midia fisica',
        amount: 100,
        id: '1',
        name: 'product1',
        classification: 5,
        image: 'image1',
        status: 'active'
      },
      {
        platform: 'nintendo',
        type: 'midia fisica',
        amount: 200,
        id: '2',
        name: 'product2',
        classification: 5,
        image: 'image2',
        status: 'active'
      },
      {
        platform: 'playstation',
        type: 'midia digital',
        amount: 300,
        id: '3',
        name: 'product3',
        classification: 5,
        image: 'image3',
        status: 'active'
      },
      {
        platform: 'xbox',
        type: 'midia digital',
        amount: 400,
        id: '4',
        name: 'product4',
        classification: 5,
        image: 'image4',
        status: 'active'
      },
      {
        platform: 'xbox',
        type: 'midia digital',
        amount: 700,
        id: '5',
        name: 'product5',
        classification: 5,
        image: 'image5',
        status: 'active'
      }
    ]

    const expected: ProductDashboard = {
      playstation: {
        'midia fisica': {
          quantity: 1,
          amount: 100
        },
        'midia digital': {
          quantity: 1,
          amount: 300
        }
      },
      xbox: {
        'midia digital': {
          quantity: 2,
          amount: 1100
        },
        'midia fisica': {
          quantity: 0,
          amount: 0
        }
      },
      pc: {
        'midia fisica': {
          quantity: 0,
          amount: 0
        },
        'midia digital': {
          quantity: 0,
          amount: 0
        }
      },
      nintendo: {
        'midia fisica': {
          quantity: 1,
          amount: 200
        },
        'midia digital': {
          quantity: 0,
          amount: 0
        }
      }
    }

    const result = generateProductData(types, platforms, products)
    expect(result).toEqual(expected)
  })

  it('should return an empty object if no types or platforms are provided', () => {
    const types: TypeCollection[] = []
    const platforms: PlatformCollection[] = []
    const products: ProductCollection[] = []

    const expected: ProductDashboard = {}

    const result = generateProductData(types, platforms, products)
    expect(result).toEqual(expected)
  })

  it('should handle products with no matching types or platforms', () => {
    const types: TypeCollection[] = [{ name: 'type1', id: 'type1' }]

    const platforms: PlatformCollection[] = [{ name: 'platform1', id: 'platform1' }]

    const products: ProductCollection[] = [
      {
        platform: 'playstation',
        type: 'midia fisica',
        amount: 100,
        id: '1',
        name: 'product1',
        classification: 5,
        image: 'image1',
        status: 'active'
      }
    ]

    const expected: ProductDashboard = {
      platform1: {
        type1: {
          quantity: 0,
          amount: 0
        }
      }
    }

    const result = generateProductData(types, platforms, products)
    expect(result).toEqual(expected)
  })
})
