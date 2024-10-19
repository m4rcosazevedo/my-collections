import * as yup from 'yup'

const itemCollectionSchema = yup
  .object({
    name: yup.string().required('O campo nome é obrigatório'),
    collectionFilter: yup.string(),
    type: yup.string().test('required', 'O campo Tipo é obrigatório', function (value) {
      const { collectionFilter } = this.parent
      if (collectionFilter?.includes('types')) {
        return !!value
      }
      return true
    }),
    platform: yup.string().test('required', 'O campo Plataforma é obrigatório', function (value) {
      const { collectionFilter } = this.parent
      if (collectionFilter?.includes('platforms')) {
        return !!value
      }
      return true
    }),
    status: yup.string().test('required', 'O campo Status é obrigatório', function (value) {
      const { collectionFilter } = this.parent
      if (collectionFilter?.includes('statuses')) {
        return !!value
      }
      return true
    }),
    amount: yup
      .string()
      .required('O campo Preço é obrigatório')
      .max(12, 'Só é permitido até 12 caracteres'),
    classification: yup.number(),
    description: yup.string(),
    image: yup.mixed().nullable() as yup.MixedSchema<
      FileList | null | undefined,
      yup.AnyObject,
      undefined,
      ''
    >,
    imageUrl: yup
      .string()
      .url('A URL da imagem é inválida')
      .test('required', 'Você deve fornecer um arquivo ou uma URL', function (value) {
        const { image } = this.parent
        if (!image || image.length === 0) {
          return !!value
        }
        return true
      })
  })
  .required()

type ItemCollectionSchemaValues = yup.InferType<typeof itemCollectionSchema>

export { itemCollectionSchema, type ItemCollectionSchemaValues }
