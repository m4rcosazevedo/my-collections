import { Card, CardMedia, styled, Typography } from '@mui/material'

export const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  margin: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  '&:hover': {
    boxShadow: theme.shadows[6]
  }
}))

export const StyledCardMedia = styled(CardMedia)(() => ({
  width: '100%',
  height: 0,
  paddingBottom: '150%', // 2:3 aspect ratio
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundColor: '#ffffff',
  minHeight: 420
}))

export const TruncatedTypography = styled(Typography)(() => ({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
  textOverflow: 'ellipsis',
  fontSize: '1rem',
  fontWeight: 600
}))

export const Text = styled(Typography)(() => ({
  fontSize: '.8rem'
}))
