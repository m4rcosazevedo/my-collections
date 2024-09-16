import PageCollectionItemAddOrUpdate from '@/components/page-collection-item/page-collection-item-add-or-update'
import { db } from '@/config/firebase'
import { useCollectionItemForm } from '@/hooks'
import { ItemCollectionSchemaValues } from '@/schemas/item-collection.schema'
import { uploadImage } from '@/services'
import { sanitezeAmountToDB } from '@/utils'
import { CircularProgress } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type ValuesProps = ItemCollectionSchemaValues

const CollectionItemcreate = () => {
  const navigate = useNavigate()
  const [uploading, setUploading] = useState(false)
  const collectionItemHook = useCollectionItemForm()

  const onSubmit = async (data: ValuesProps) => {
    setUploading(true)

    try {
      const imageUrl = await uploadImage({
        imageUrl: data.imageUrl,
        imageFile: data.image
      })

      await addDoc(collection(db, 'products'), {
        name: data.name,
        image: imageUrl,
        type: data.type,
        platform: data.platform,
        amount: sanitezeAmountToDB(data.amount),
        status: data.status,
        classification: data.classification,
        description: data.description
      })
      toast.success('Produto cadastrado com sucesso!')
      navigate('/collection')
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
