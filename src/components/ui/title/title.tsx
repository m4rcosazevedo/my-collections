import { Typography } from '@mui/material'

interface TitleProps {
  children: React.ReactNode
}
export const Title = ({ children }: TitleProps) => {
  return (
    <Typography variant="h5" component="h1" mt={2} mb={2}>
      {children}
    </Typography>
  )
}
