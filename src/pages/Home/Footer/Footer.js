import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" bgcolor="text.secondary" color="white" py={3}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit">
              Liens Rapides
            </Typography>
            <Link href="#" color="inherit">Accueil</Link><br/>
            <Link href="#" color="inherit">À Propos</Link><br/>
            <Link href="#" color="inherit">Contact</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit">
              Contact
            </Typography>
            <Typography>
              Adresse : 123 Rue Exemple<br/>
              Téléphone : 01 23 45 67 89<br/>
              Email : contact@defibrillateurs.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit">
              Suivez-nous
            </Typography>
            {/* Ici, vous pouvez ajouter des icônes de réseaux sociaux */}
          </Grid>
        </Grid>
        <Typography variant="body2" color="inherit" style={{ marginTop: '20px' }}>
          © 2023 Recherche de Défibrillateurs
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
