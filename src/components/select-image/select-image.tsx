import { Box, Grid, Modal, Typography } from '@mui/material'

interface SelectImageProps {
  open: boolean
  onClose: () => void
  images: string[]
  onSelectImage: (image: string) => void
  loading: boolean
}

const SelectImage = ({ open, onClose, images, onSelectImage, loading }: SelectImageProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          maxWidth: 800,
          maxHeight: '90vh',
          overflow: 'auto',
          borderRadius: 2
        }}
      >
        <Typography variant="h6" id="modal-title" gutterBottom>
          Selecionar Imagem
        </Typography>
        <br />

        {loading && <Typography variant="body1">Carregando...</Typography>}

        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item key={index}>
              <img
                className="object-contain"
                src={image}
                alt={`Imagem ${index + 1}`}
                style={{ width: 150, height: 150, cursor: 'pointer' }}
                onClick={() => onSelectImage(image)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  )
}

export default SelectImage
