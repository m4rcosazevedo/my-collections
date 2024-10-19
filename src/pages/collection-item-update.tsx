import PageCollectionItemAddOrUpdate from '@/components/page-collection-item/page-collection-item-add-or-update'
import { db } from '@/config/firebase'
import { useCollectionItemForm, useProduct } from '@/hooks'
import { ItemCollectionSchemaValues } from '@/schemas/item-collection.schema'
import { uploadImage } from '@/services'
import { sanitezeAmountToDB, sanitezeAmountToForm } from '@/utils'
import { CircularProgress } from '@mui/material'
import { doc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const CollectionItemUpdate = () => {
  const { uuidItem } = useParams()
  const collectionItemHook = useCollectionItemForm()
  const { reset, loading: loadingOptions, collection: collectionData } = collectionItemHook
  const { product, loading } = useProduct(uuidItem!)
  const [submmiting, setSubmmiting] = useState(false)

  useEffect(() => {
    if (product && !loadingOptions) {
      reset({
        name: product.name,
        image: null,
        imageUrl: product.image,
        collection: product.collection,
        collectionFilter: collectionData?.filters ?? '',
        type: product.type ?? '',
        platform: product.platform ?? '',
        amount: sanitezeAmountToForm(product.amount),
        status: product.status ?? '',
        classification: product.classification,
        description: product.description
      } as ItemCollectionSchemaValues)
    }
  }, [reset, product, loadingOptions, collectionData])

  const onSubmit = async (data: ItemCollectionSchemaValues) => {
    setSubmmiting(true)

    try {
      let imageUrl = product?.image

      if (data.imageUrl !== imageUrl || data.image) {
        imageUrl = await uploadImage({
          imageUrl: data.imageUrl,
          imageFile: data.image
        })
      }

      const hasPlatforms = collectionData?.filters?.includes('platforms') ?? false
      const hasTypes = collectionData?.filters?.includes('types') ?? false
      const hasStatuses = collectionData?.filters?.includes('statuses') ?? false

      const productRef = doc(db, 'products', uuidItem!)
      await updateDoc(productRef, {
        name: data.name,
        image: imageUrl,
        amount: sanitezeAmountToDB(data.amount),
        classification: data.classification,
        description: data.description,
        ...((hasPlatforms && { platform: data.platform }) || {}),
        ...((hasStatuses && { status: data.status }) || {}),
        ...((hasTypes && { type: data.type }) || {})
      })

      toast.success(data.name + ' foi atualizado com sucesso!')
    } catch (error) {
      toast.error('Erro ao atualizar produto =(')
    } finally {
      setSubmmiting(false)
    }
  }

  if ([loading, loadingOptions, !submmiting].every(loading => loading)) {
    return <CircularProgress />
  }

  return (
    <PageCollectionItemAddOrUpdate
      defaultValues={collectionItemHook.DEFAULT_VALUES}
      onSubmit={onSubmit}
      title={`Editar o item: ${product?.name}`}
      buttonStatus={false}
      buttonText={submmiting ? 'Atualizando...' : 'Editar'}
      collectionItemHook={collectionItemHook}
      previewImage={product?.image}
      uuid={uuidItem}
    />
  )
}

export default CollectionItemUpdate
