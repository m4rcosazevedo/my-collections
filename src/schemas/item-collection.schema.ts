import * as yup from 'yup'

const itemCollectionSchema = yup
  .object({
    name: yup.string().required('O campo nome é obrigatório'),
    type: yup.string().required('O campo Tipo é obrigatório'),
    platform: yup.string().required('O campo Plataforma é obrigatório'),
    amount: yup
      .string()
      .required('O campo Preço é obrigatório')
      .max(12, 'Só é permitido até 12 caracteres'),
    status: yup.string().required('O campo Status é obrigatório'),
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
