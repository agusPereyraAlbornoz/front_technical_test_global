import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate  } from 'react-router-dom';
import './PrincipalMenu.css'

const PrincipalMenu: React.FC = () => {
  const navigate = useNavigate();
  const optionsMenu = [
    {text: 'Listado de Entidades', path: '/entitiesList'},
    {text: 'Solicitudes Recibidas', path: '/receivedRequest'}
  ]
  
  return <div className='principalMenu-container'>
    <Drawer
        variant="permanent"
        className='drawer-custom'
      >
        <Toolbar />
        <div className='principalMenu-List'>
          <List>
            {optionsMenu.map((opt, index) => (
              <ListItem key={opt.text} disablePadding>
                <ListItemButton onClick={() => navigate(opt.path)}>
                  <ListItemText primary={opt.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
  </div>
};

export default PrincipalMenu;