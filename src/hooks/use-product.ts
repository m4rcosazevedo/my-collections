import { makeProductServiceGetProductById } from '@/services'
import { useEffect, useState } from 'react'

export const useProduct = (id: string) => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState<ProductCollection>()

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const productsData = await makeProductServiceGetProductById(id)

      setProduct(productsData)

      setLoading(false)
    }

    fetchData()
  }, [id])

  return {
    product,
    loading
  }
}
