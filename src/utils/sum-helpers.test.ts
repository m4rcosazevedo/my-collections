import { kahanSum, preciseSum, sum } from './sum-helpers'

describe('kahanSum', () => {
  it('should return the correct sum for an array of positive numbers', () => {
    const result = kahanSum([1, 2, 3, 4, 5])
    expect(result).toBeCloseTo(15)
  })

  it('should return the correct sum for an array of negative numbers', () => {
    const result = kahanSum([-1, -2, -3, -4, -5])
    expect(result).toBeCloseTo(-15)
  })

  it('should return the correct sum for an array of mixed positive and negative numbers', () => {
    const result = kahanSum([1, -2, 3, -4, 5])
    expect(result).toBeCloseTo(3)
  })

  it('should return 0 for an empty array', () => {
    const result = kahanSum([])
    expect(result).toBe(0)
  })

  it('should handle large numbers accurately', () => {
    const result = kahanSum([1e10, 1e10, 1e10, -1e10, -1e10, -1e10])
    expect(result).toBeCloseTo(0)
  })
})

describe('preciseSum', () => {
  it('should return the correct sum for a list of positive numbers', () => {
    const result = preciseSum(1, 2, 3, 4, 5)
    expect(result).toBeCloseTo(15)
  })

  it('should return the correct sum for a list of negative numbers', () => {
    const result = preciseSum(-1, -2, -3, -4, -5)
    expect(result).toBeCloseTo(-15)
  })

  it('should return the correct sum for a list of mixed positive and negative numbers', () => {
    const result = preciseSum(1, -2, 3, -4, 5)
    expect(result).toBeCloseTo(3)
  })

  it('should return 0 for no arguments', () => {
    const result = preciseSum()
    expect(result).toBe(0)
  })

  it('should handle large numbers accurately', () => {
    const result = preciseSum(1e10, 1e10, 1e10, -1e10, -1e10, -1e10)
    expect(result).toBeCloseTo(0)
  })
})

describe('sum', () => {
  it('should return the correct sum for two positive numbers', () => {
    const result = sum(1, 2)
    expect(result).toBeCloseTo(3)
  })

  it('should return the correct sum for two negative numbers', () => {
    const result = sum(-1, -2)
    expect(result).toBeCloseTo(-3)
  })

  it('should return the correct sum for a positive and a negative number', () => {
    const result = sum(1, -2)
    expect(result).toBeCloseTo(-1)
  })

  it('should handle large numbers accurately', () => {
    const result = sum(1e10, -1e10)
    expect(result).toBeCloseTo(0)
  })
})
