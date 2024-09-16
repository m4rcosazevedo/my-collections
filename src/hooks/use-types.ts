import { makeTypeServiceGetAll } from '@/services'
import { useEffect, useState } from 'react'

export const useTypes = () => {
  const [loading, setLoading] = useState(true)
  const [types, setTypes] = useState<TypeCollection[]>([])

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      const types = await makeTypeServiceGetAll()
      setTypes(types)
      setLoading(false)
    })()
  }, [])

  return {
    loading,
    types
  }
}
