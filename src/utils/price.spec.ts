import { formatPrice, sanitezeAmountToDB, sanitezeAmountToForm } from './price'

describe('formatPrice', () => {
  it('should format the price correctly for BRL currency', () => {
    const price = 1234.56
    const formattedPrice = formatPrice(price)
    expect(formattedPrice).toBe('R$ 1.234,56')
  })

  it('should format zero correctly', () => {
    const price = 0
    const formattedPrice = formatPrice(price)
    expect(formattedPrice).toBe('R$ 0,00')
  })

  it('should format negative prices correctly', () => {
    const price = -1234.56
    const formattedPrice = formatPrice(price)
    expect(formattedPrice).toBe('-R$ 1.234,56')
  })

  it('should format large numbers correctly', () => {
    const price = 1234567890.12
    const formattedPrice = formatPrice(price)
    expect(formattedPrice).toBe('R$ 1.234.567.890,12')
  })
})

describe('sanitezeAmountToDB', () => {
  it('should remove non-numeric characters and convert to number', () => {
    const amount = 'R$ 1.234,56'
    const sanitizedAmount = sanitezeAmountToDB(amount)
    expect(sanitizedAmount).toBe(1234.56)
  })

  it('should handle negative numbers', () => {
    const amount = '-R$ 1.234,56'
    const sanitizedAmount = sanitezeAmountToDB(amount)
    expect(sanitizedAmount).toBe(-1234.56)
  })

  it('should handle invalid amounts', () => {
    const amount = 'R$ 1.234,56,78'
    const sanitizedAmount = sanitezeAmountToDB(amount)
    expect(sanitizedAmount).toBe(123456.78)
  })

  it('should handle empty amounts', () => {
    const amount = ''
    const sanitizedAmount = sanitezeAmountToDB(amount)
    expect(sanitizedAmount).toBe(0)
  })
})

describe('sanitezeAmountToForm', () => {
  it('should format the amount correctly for form input', () => {
    const amount = 1234.56
    const formattedAmount = sanitezeAmountToForm(amount)
    expect(formattedAmount).toBe('1234,56')
  })

  it('should handle zero correctly', () => {
    const amount = 0
    const formattedAmount = sanitezeAmountToForm(amount)
    expect(formattedAmount).toBe('0,00')
  })

  it('should handle negative amounts correctly', () => {
    const amount = -1234.56
    const formattedAmount = sanitezeAmountToForm(amount)
    expect(formattedAmount).toBe('-1234,56')
  })

  it('should handle large numbers correctly', () => {
    const amount = 1234567890.12
    const formattedAmount = sanitezeAmountToForm(amount)
    expect(formattedAmount).toBe('1234567890,12')
  })
})
