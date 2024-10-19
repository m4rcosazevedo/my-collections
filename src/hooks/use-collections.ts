import { makeCollectionServiceGetAll } from '@/services'
import { useEffect, useState } from 'react'

export const useCollections = () => {
  const [loading, setLoading] = useState(true)
  const [collections, setCollections] = useState<Collection[]>([])

  useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
      const collectionsData = await makeCollectionServiceGetAll()
      setCollections(collectionsData)
      setLoading(false)
    }

    fetchData()
  }, [])

  return {
    collections,
    loading
  }
}
