import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import CollectionsIcon from '@mui/icons-material/Collections'
import DashboardIcon from '@mui/icons-material/Dashboard'

import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

const drawerWidth = 240

const AuthenticatedLayout = () => {
  const navigate = useNavigate()

  const goTo = (path: string) => {
    navigate(path)
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem>
              <ListItemButton onClick={() => goTo('/')}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem>
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
            {/* <ListItem>
              <ListItemButton onClick={() => goTo('/collection/item/create/multi')}>
                <ListItemIcon>
                  <AddAPhotoIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastro em Lote" />
              </ListItemButton>
            </ListItem> */}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}

export default AuthenticatedLayout
