import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Assurez-vous d'avoir cette icône

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo - Remplacez "logo.svg" par votre chemin de logo */}
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src="defib.svg" alt="Logo" style={{ height: '40px',borderRadius:'25px' }} />
        </IconButton>

        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Recherche de Défibrillateurs
        </Typography>

        <Button color="inherit">Accueil</Button>
        <Button color="inherit">À Propos</Button>
        <Button color="inherit">Contact</Button>

        {/* Menu déroulant */}
        <Button color="inherit" onClick={handleMenuClick}>
          Plus
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
          <MenuItem onClick={handleMenuClose}>Partenaires</MenuItem>
          <MenuItem onClick={handleMenuClose}>FAQ</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
