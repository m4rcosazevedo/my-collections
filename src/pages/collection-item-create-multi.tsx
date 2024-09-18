import SelectImage from '@/components/select-image/select-image'
import { db } from '@/config/firebase'
import { IProduct, ProductSchema } from '@/schemas/product.schema'
import { uploadImage } from '@/services'
import { searchImageOnApi } from '@/services/search-image'
import {
  Box,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import Papa from 'papaparse'
import { useState } from 'react'
import { toast } from 'react-toastify'

const CollectionItemCreateMulti = () => {
  const [uploading, setUploading] = useState(false)
  const [csvData, setCsvData] = useState<IProduct[]>([])
  const [showExampleCsv, setShowExampleCSV] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: results => {
        const data = results.data as IProduct[]
        setCsvData(data)
      },
      error: () => {
        toast.error('Erro ao processar o arquivo CSV')
      }
    })
  }

  const handleUpload = async () => {
    setUploading(true)
    try {
      for (const item of csvData) {
        const product = new ProductSchema(item)
        await addDoc(collection(db, 'products'), {
          name: product.name,
          image: product.imageUrl,
          type: product.type,
          platform: product.platform,
          amount: product.amount,
          status: product.status,
          classification: product.classification,
          description: product.description
        })
      }
      toast.success('Itens cadastrados com sucesso!')
    } catch (error) {
      toast.error('Erro ao cadastrar itens no Firestore')
    } finally {
      setUploading(false)
    }
  }

  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentImages, setCurrentImages] = useState<string[]>([])

  const handleOpen = async (index: number) => {
    setOpen(true)
    const item = csvData[index]

    try {
      const data = await searchImageOnApi(`${item.name} ${item.platform}`)
      setCurrentImages(data)
      setCurrentIndex(index)
    } catch (error) {
      console.error('Erro ao buscar imagens:', error)
    }
  }

  const handleClose = () => setOpen(false)

  const addToContent = async (image: string) => {
    try {
      const imageUrl = (await uploadImage({ imageUrl: image })) ?? ''

      setCsvData(prevState => [
        ...prevState.slice(0, currentIndex),
        { ...prevState[currentIndex], imageUrl },
        ...prevState.slice(currentIndex + 1)
      ])
      handleClose()
    } catch (error) {
      toast.error('Erro ao adicionar imagem ao conteúdo')
    }
  }

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Cadastro em Massa de Produtos
      </Typography>

      <section className="flex gap-2">
        <Button variant="contained" component="label">
          Selecionar Arquivo CSV
          <input type="file" accept=".csv" hidden onChange={handleFileUpload} />
        </Button>
        <Button variant="contained" component="label" onClick={() => setShowExampleCSV(true)}>
          Mostrar Exemplo
        </Button>
      </section>

      {showExampleCsv && (
        <section>
          <pre className="border-solid border p-4">
            {`imageUrl,name,status,type,platform,amount,classification
,Super Mario World,,Física,Super Nintendo,"R$ 149,89"`}
          </pre>
        </section>
      )}

      <section className="mb-4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Imagem</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Plataforma</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Classificação</TableCell>
              <TableCell>Descrição</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {csvData.map((item, index) => (
              <TableRow key={index} hover>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    {item.imageUrl && (
                      <img src={item.imageUrl} alt={item.name} style={{ width: 50, height: 50 }} />
                    )}
                    <Button variant="contained" onClick={() => handleOpen(index)} size="small">
                      Selecionar
                    </Button>
                  </div>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.platform}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.classification}</TableCell>
                <TableCell>{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={uploading || csvData.length === 0}
      >
        {uploading ? <CircularProgress size={24} /> : 'Cadastrar Itens'}
      </Button>

      {csvData.length > 0 && (
        <Typography variant="body1" gutterBottom>
          {csvData.length} itens prontos para cadastro.
        </Typography>
      )}

      <SelectImage
        open={open}
        onClose={handleClose}
        images={currentImages}
        onSelectImage={addToContent}
        loading={currentImages.length === 0}
      />
    </Box>
  )
}

export default CollectionItemCreateMulti
