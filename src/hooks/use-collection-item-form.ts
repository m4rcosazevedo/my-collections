import { itemCollectionSchema, ItemCollectionSchemaValues } from '@/schemas/item-collection.schema'
import {
  makePlatformServiceGetAll,
  makeStatusesServiceGetAll,
  makeTypeServiceGetAll
} from '@/services'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const DEFAULT_VALUES: ItemCollectionSchemaValues = {
  name: '',
  image: null,
  imageUrl: '',
  type: '',
  platform: '',
  amount: '',
  status: '',
  classification: 0,
  description: ''
}

export const useCollectionItemForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue
  } = useForm<ItemCollectionSchemaValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(itemCollectionSchema)
  })

  const [types, setTypes] = useState<TypeCollection[]>([])
  const [platforms, setPlatforms] = useState<PlatformCollection[]>([])
  const [statuses, setStatuses] = useState<StatusCollection[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      setTypes(await makeTypeServiceGetAll())
      setPlatforms(await makePlatformServiceGetAll())
      setStatuses(await makeStatusesServiceGetAll())
      setLoading(false)
    })()
  }, [])

  return {
    control,
    watch,
    setValue,
    handleSubmit,
    errors,
    types,
    platforms,
    statuses,
    reset,
    DEFAULT_VALUES,
    loading
  }
}
