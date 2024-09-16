export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const sanitezeAmountToDB = (amount: string) => {
  if (!amount) return 0

  const [integerPart, decimalPart] = amount.split(',').reduce(
    (acc, curr, index, arr) => {
      if (index === arr.length - 1) {
        acc[1] = curr
      } else {
        acc[0] += curr.replace(/[^0-9-]/g, '')
      }
      return acc
    },
    ['', '']
  )

  return Number(`${integerPart}.${decimalPart}`) || 0
}

export const sanitezeAmountToForm = (amount: number) => {
  return amount.toFixed(2).replace('.', ',')
}
