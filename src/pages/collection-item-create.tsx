import PageCollectionItemAddOrUpdate from '@/components/page-collection-item/page-collection-item-add-or-update'
import { db } from '@/config/firebase'
import { useCollectionItemForm } from '@/hooks'
import { ItemCollectionSchemaValues } from '@/schemas/item-collection.schema'
import { uploadImage } from '@/services'
import { sanitezeAmountToDB } from '@/utils'
import { CircularProgress } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type ValuesProps = ItemCollectionSchemaValues

const CollectionItemcreate = () => {
  const navigate = useNavigate()
  const [uploading, setUploading] = useState(false)
  const collectionItemHook = useCollectionItemForm()
  const { collection: collectionData, reset } = collectionItemHook

  useEffect(() => {
    if (collectionData?.filters) {
      reset({
        collectionFilter: collectionData?.filters || ''
      } as ItemCollectionSchemaValues)
    }
  }, [collectionData, reset])

  const onSubmit = async (data: ValuesProps) => {
    setUploading(true)

    try {
      const imageUrl = await uploadImage({
        imageUrl: data.imageUrl,
        imageFile: data.image
      })

      const { collection: collectionData } = collectionItemHook

      const hasPlatforms = collectionData?.filters?.includes('platforms') ?? false
      const hasTypes = collectionData?.filters?.includes('types') ?? false
      const hasStatuses = collectionData?.filters?.includes('statuses') ?? false

      await addDoc(collection(db, 'products'), {
        name: data.name,
        image: imageUrl,
        collection: collectionData?.id,
        amount: sanitezeAmountToDB(data.amount),
        classification: data.classification,
        description: data.description,
        ...((hasPlatforms && { platform: data.platform }) || {}),
        ...((hasStatuses && { status: data.status }) || {}),
        ...((hasTypes && { type: data.type }) || {})
      })
      toast.success('Produto cadastrado com sucesso!')
      navigate(`/collection/${collectionData?.id}`)
    } catch (error) {
      toast.error('Erro ao cadastrar produto')
    } finally {
      setUploading(false)
    }
  }

  if (uploading) {
    return <CircularProgress />
  }

  return (
    <PageCollectionItemAddOrUpdate
      defaultValues={collectionItemHook.DEFAULT_VALUES}
      onSubmit={onSubmit}
      title="Cadastrar novo item"
      buttonStatus={uploading}
      buttonText={uploading ? 'Cadastrando...' : 'Cadastrar'}
      collectionItemHook={collectionItemHook}
    />
  )
}

export default CollectionItemcreate
