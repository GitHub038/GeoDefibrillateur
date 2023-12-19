import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';

const Content = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Trouvez un Défibrillateur
      </Typography>
      <Typography paragraph>
        Saisissez votre emplacement pour trouver les défibrillateurs les plus proches.
      </Typography>
      <Box my={2}>
        <TextField label="Entrez une adresse ou un code postal" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary">Rechercher</Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Qu'est-ce qu'un Défibrillateur ?</Typography>
            <Typography>
              Un défibrillateur est un appareil essentiel pour sauver des vies en cas d'arrêt cardiaque...
            </Typography>
            {/* Ajoutez plus de contenu ou une image */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Comment Utiliser un Défibrillateur ?</Typography>
            <Typography>
              En cas d'urgence, chaque seconde compte. Voici comment utiliser un défibrillateur...
            </Typography>
            {/* Ajoutez plus de contenu ou une image */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Content;
