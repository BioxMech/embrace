import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import HomeKeyPoints from '../../component/home/homekeypoints.component';
import HomeCarousel from '../../component/home/homeCarousel.component';
import './home.styles.scss';

function Home() {

  return (
    // <Container maxWidth="lg" >
      <Box mb={2} style={{ textAlign: "center" }}>
        <Grid container>
          <HomeCarousel />
          <Grid item xs={12} style={{ marginTop: "5vh" }}>
            <HomeKeyPoints />
          </Grid>
        </Grid>
      </Box>
    // </Container>
  )
}

export default Home