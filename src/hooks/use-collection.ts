import { makeCollectionServiceGetCollectionById } from '@/services'
import { useEffect, useState } from 'react'

export const useCollection = (id: string) => {
  const [loading, setLoading] = useState(true)
  const [collection, setProduct] = useState<Collection>()

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const collectionData = await makeCollectionServiceGetCollectionById(id)

      setProduct(collectionData)

      setLoading(false)
    }

    fetchData()
  }, [id])

  return {
    collection,
    loading
  }
}
