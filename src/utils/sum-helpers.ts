export const kahanSum = (array: number[]) => {
  let sum = 0.0
  let c = 0.0

  for (let i = 0; i < array.length; i++) {
    const y = array[i] - c
    const t = sum + y
    c = t - sum - y
    sum = t
  }

  return sum
}

export function preciseSum(...numbers: number[]): number {
  const scaleFactor = Math.pow(10, 15)

  const sum = numbers.reduce((acc, num) => {
    const scaledNum = Math.round(num * scaleFactor)
    return acc + scaledNum
  }, 0)

  return sum / scaleFactor
}
