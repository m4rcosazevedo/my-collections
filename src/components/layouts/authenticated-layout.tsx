import { useAuthCheck, useCollections } from '@/hooks'
import LogoutIcon from '@mui/icons-material/Logout'

import {
  AppBar,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import { getAuth, signOut } from 'firebase/auth'
import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Loading } from '../ui'

const drawerWidth = 280

const AuthenticatedLayout = () => {
  const navigate = useNavigate()
  const { loading, user } = useAuthCheck()
  const { collections, loading: loadingCollection } = useCollections()

  const goTo = (path: string) => {
    navigate(path)
  }

  const handleLogout = async () => {
    const auth = getAuth()

    try {
      await signOut(auth)
    } catch (error) {
      toast.error('Erro ao sair da aplicação')
    }
  }

  if (loading) {
    return <Loading />
  }

  if (!user) {
    navigate('/login')
    return <Loading />
  }

  if (loadingCollection) {
    return <Loading />
  }

  return (
    <Box>
      <AppBar component="nav" sx={{ textAlign: 'right', px: 9 }}>
        <Typography variant="h6" sx={{ my: 2 }}>{`Olá ${
          user.displayName?.split(' ')[0] || user.email?.split('@')[0]
        }`}</Typography>
      </AppBar>

      <Box sx={{ display: 'flex' }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
          }}
        >
          <Box
            sx={{
              overflow: 'auto',
              justifyContent: 'space-between',
              display: 'flex',
              flexDirection: 'column',
              flex: 1
            }}
          >
            <List>
              <ListItem>
                <ListItemButton onClick={() => goTo('/')}>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>

              {collections.map(collection => (
                <ListItem key={collection.id}>
                  <ListItemButton onClick={() => goTo(`/collection/${collection.id}`)}>
                    <ListItemText primary={collection.name} />
                  </ListItemButton>
                </ListItem>
              ))}

              {/* <ListItem>
                <ListItemButton onClick={() => goTo('/collection')}>
                  <ListItemIcon>
                    <CollectionsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Coleção" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={() => goTo('/collection/item/create')}>
                  <ListItemIcon>
                    <AddAPhotoIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cadastrar item" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={() => goTo('/collection/item/create/multi')}>
                  <ListItemIcon>
                    <AddAPhotoIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cadastro em Lote" />
                </ListItemButton>
              </ListItem>
             */}
            </List>

            <List>
              <ListItem>
                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <Box display="flex" flexDirection="column">
                    <ListItemText primary="Sair" />
                  </Box>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, pt: 9 }}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default AuthenticatedLayout
