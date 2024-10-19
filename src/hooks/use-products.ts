import {
  makeCollectionServiceGetCollectionById,
  makePlatformServiceGetAllMap,
  makeProductServiceGetProducts,
  makeStatusesServiceGetAllMap,
  makeTypeServiceGetAllMap
} from '@/services'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useProducts = () => {
  const { uuid } = useParams()
  const [loading, setLoading] = useState(true)
  const [collection, setCollection] = useState<CollectionData>()
  const [products, setProducts] = useState<ProductCollection[]>([])
  const [platforms, setPlatforms] = useState<string[]>([])
  const [types, setTypes] = useState<string[]>([])
  const [statuses, setStatuses] = useState<string[]>([])

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const collectionData = await makeCollectionServiceGetCollectionById(uuid!)
      const productsData = await makeProductServiceGetProducts(uuid!)
      const typesMap = await makeTypeServiceGetAllMap()
      const platformsMap = await makePlatformServiceGetAllMap()
      const statusesMap = await makeStatusesServiceGetAllMap()

      setPlatforms(Array.from(platformsMap.values()))
      setTypes(Array.from(typesMap.values()))
      setStatuses(Array.from(statusesMap.values()))

      const filters = collectionData.filters?.split(',') ?? []
      setCollection({
        ...collectionData,
        filters
      })

      setProducts(
        productsData.map(product => ({
          ...product,
          platform: platformsMap.get(product.platform)!,
          status: statusesMap.get(product.status)!,
          type: typesMap.get(product.type)!
        }))
      )

      setLoading(false)
    }

    fetchData()
  }, [uuid])

  return {
    products,
    loading,
    platforms,
    types,
    statuses,
    collection
  }
}
