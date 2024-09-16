import { makePlatformServiceGetAll } from '@/services'
import { useEffect, useState } from 'react'

export const usePlatforms = () => {
  const [loading, setLoading] = useState(true)
  const [platforms, setPlatforms] = useState<PlatformCollection[]>([])

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      const platforms = await makePlatformServiceGetAll()
      setPlatforms(platforms)
      setLoading(false)
    })()
  }, [])

  return {
    loading,
    platforms
  }
}
