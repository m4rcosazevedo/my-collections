import { LazyImage, TextField, TextMaskCustom, Title } from '@/components/ui'
import { db } from '@/config/firebase'
import { useCollectionItemForm } from '@/hooks'
import { ItemCollectionSchemaValues } from '@/schemas/item-collection.schema'
import { uploadImage } from '@/services'
import { searchImageOnApi } from '@/services/search-image'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Rating,
  Select
} from '@mui/material'
import { deleteDoc, doc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import SelectImage from '../select-image/select-image'

type ValuesProps = ItemCollectionSchemaValues

interface PageCollectionItemAddOrUpdateProps {
  defaultValues?: ValuesProps
  onSubmit: (data: ValuesProps) => Promise<void>
  title: string
  buttonStatus: boolean
  buttonText: string
  collectionItemHook: ReturnType<typeof useCollectionItemForm>
  previewImage?: string
  uuid?: string
}

const PageCollectionItemAddOrUpdate = ({
  onSubmit,
  title,
  buttonStatus,
  buttonText,
  collectionItemHook: {
    control,
    handleSubmit,
    errors,
    types,
    platforms,
    statuses,
    watch,
    setValue,
    collection
  },
  previewImage,
  uuid
}: PageCollectionItemAddOrUpdateProps) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState<string[]>([])
  const [imageView, setImageView] = useState<string | null>()

  const hasPlatforms = collection?.filters?.includes('platforms') ?? false
  const hasTypes = collection?.filters?.includes('types') ?? false
  const hasStatuses = collection?.filters?.includes('statuses') ?? false

  useEffect(() => {
    setImageView(previewImage)
  }, [previewImage])

  const handleDelete = async () => {
    if (!uuid) return

    if (window.confirm('Deseja realmente excluir este item?')) {
      try {
        await deleteDoc(doc(db, 'products', uuid))
        toast.success('Item excluído com sucesso!')
        navigate(`/collection/${collection?.id}`)
      } catch (error) {
        toast.error('Erro ao excluir o item!')
      }
    }
  }

  const handleOpen = async () => {
    setOpen(true)
    setLoading(true)
    const name = watch('name')
    const platform = watch('platform')
    const platformName = platforms.find(({ id }) => id === platform)?.name ?? ''
    const searchText = `${name} ${hasPlatforms ? platformName : collection?.name}`
    const images = await searchImageOnApi(searchText)
    setImages(images)
    setLoading(false)
  }

  const handleClose = () => setOpen(false)

  const onSelectImage = async (image: string) => {
    try {
      const imageUrl = (await uploadImage({ imageUrl: image })) ?? ''
      setValue('imageUrl', imageUrl)
      setImageView(imageUrl)
      handleClose()
    } catch (error) {
      toast.error('Erro ao selecionar imagem')
    }
  }

  return (
    <Box>
      <Title>{title}</Title>

      <Link href={`/collection/${collection?.id}`} underline="hover">
        <Button variant="contained" color="primary" size="small">
          Voltar
        </Button>
      </Link>

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 3, width: '100%' }}
      >
        <Controller
          name="collectionFilter"
          control={control}
          defaultValue={collection?.filters || ''}
          render={({ field }) => <input type="hidden" {...field} />}
        />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  id="name"
                  label="Nome"
                  {...field}
                  helperText={errors.name?.message}
                  error={!!errors.name}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            {imageView && (
              <>
                <InputLabel>Imagem</InputLabel>
                <LazyImage src={imageView} alt="Imagem" width={150} height={150} />
              </>
            )}
            {watch('name') && (hasPlatforms ? watch('platform') : true) && (
              <Button variant="contained" onClick={handleOpen} size="small">
                Buscar Imagem
              </Button>
            )}
          </Grid>
          <Grid item xs={12} md={10}>
            <InputLabel>Upload de imagem</InputLabel>
            <br />

            <Grid>
              <Grid item>
                <Controller
                  name="imageUrl"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="imageUrl"
                      label="Url da imagem"
                      {...field}
                      helperText={errors.imageUrl?.message}
                      error={!!errors.imageUrl}
                    />
                  )}
                />
              </Grid>
              <br />
              <Grid item>
                <Controller
                  name="image"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <>
                      <input
                        type="file"
                        onChange={e => {
                          if (e.target.files && e.target.files.length > 0) {
                            field.onChange(e.target.files)
                          }
                        }}
                      />
                      {!!errors.image && (
                        <FormHelperText error>{errors.image?.message}</FormHelperText>
                      )}
                    </>
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
          {hasTypes && (
            <Grid item xs={12}>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="select-type">Selecionar Tipo</InputLabel>
                    <Select
                      {...field}
                      labelId="select-type"
                      label="Selecionar Tipo"
                      error={!!errors.type}
                    >
                      {types.map(({ id, name }) => (
                        <MenuItem key={id} value={id}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    {!!errors.type && <FormHelperText error>{errors.type?.message}</FormHelperText>}
                  </FormControl>
                )}
              />
            </Grid>
          )}
          {hasPlatforms && (
            <Grid item xs={12}>
              <Controller
                name="platform"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="select-platform">Selecionar Plataforma</InputLabel>
                    <Select
                      {...field}
                      labelId="select-platform"
                      label="Selecionar Plataforma"
                      error={!!errors.platform}
                    >
                      {platforms.map(({ id, name }) => (
                        <MenuItem key={id} value={id}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    {!!errors.platform && (
                      <FormHelperText error>{errors.platform?.message}</FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Grid>
          )}
          {hasStatuses && (
            <Grid item xs={12}>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="select-status">Selecionar Status</InputLabel>
                    <Select
                      {...field}
                      labelId="select-status"
                      label="Selecionar Status"
                      error={!!errors.status}
                    >
                      {statuses.map(({ id, name }) => (
                        <MenuItem key={id} value={id}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    {!!errors.status && (
                      <FormHelperText error>{errors.status?.message}</FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <Controller
              name="amount"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextMaskCustom
                  {...field}
                  inputRef={field.ref}
                  id="amount"
                  label="Preço"
                  helperText={errors.amount?.message}
                  error={!!errors.amount}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  id="description"
                  label="Descrição"
                  {...field}
                  helperText={errors.description?.message}
                  error={!!errors.description}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="classification"
              control={control}
              render={({ field }) => (
                <>
                  <InputLabel id="classification">Classificação</InputLabel>
                  <Rating {...field} />
                  {!!errors.classification && (
                    <FormHelperText error>{errors.classification?.message}</FormHelperText>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <div className="flex gap-4">
              <Button variant="contained" color="primary" type="submit" disabled={buttonStatus}>
                {buttonText}
              </Button>

              {uuid && (
                <Button variant="contained" color="error" onClick={handleDelete}>
                  Excluir
                </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
      <SelectImage
        loading={loading}
        open={open}
        images={images}
        onClose={handleClose}
        onSelectImage={onSelectImage}
      />
    </Box>
  )
}

export default PageCollectionItemAddOrUpdate
