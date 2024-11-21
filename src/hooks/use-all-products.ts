import {
  makeCollectionServiceGetAllMap,
  makePlatformServiceGetAllMap,
  makeProductServiceGetAllProducts,
  makeStatusesServiceGetAllMap,
  makeTypeServiceGetAllMap
} from '@/services'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useAllProducts = () => {
  const { uuid } = useParams()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<ProductCollection[]>([])
  const [platforms, setPlatforms] = useState<string[]>([])
  const [types, setTypes] = useState<string[]>([])
  const [statuses, setStatuses] = useState<string[]>([])

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const productsData = await makeProductServiceGetAllProducts()
      const typesMap = await makeTypeServiceGetAllMap()
      const platformsMap = await makePlatformServiceGetAllMap()
      const statusesMap = await makeStatusesServiceGetAllMap()
      const collectionMap = await makeCollectionServiceGetAllMap()

      setPlatforms(Array.from(platformsMap.values()))
      setTypes(Array.from(typesMap.values()))
      setStatuses(Array.from(statusesMap.values()))

      setProducts(
        productsData.map(product => ({
          ...product,
          platform: platformsMap.get(product.platform!),
          status: statusesMap.get(product.status!),
          type: typesMap.get(product.type!),
          collection: collectionMap.get(product.collection!)!
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
    statuses
  }
}
