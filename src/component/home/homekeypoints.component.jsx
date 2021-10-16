import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Subscribe from '../../asset/images/subscribe.svg';
import Awareness from '../../asset/images/awareness.svg';
import Poverty from '../../asset/images/poverty.svg';

function HomeKeyPoints() {

  return (
    <Container maxWidth="lg" className="home-section">
      <Grid container className="home-logo" spacing={3}>
        <Grid item xs={12}>
          <Box my={3}>
            <Typography variant="h3">
              Our <strong className="header">Services</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box >
            <img src={Subscribe} className="logo" alt="..." />
            <p className="logo-header">Low subscription fee</p>
            <p className="logo-description">
              By buying pads and tampons in bulks, we can sell it at a more affordable price
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <img src={Awareness} className="logo" alt="..." />
            <p className="logo-header">Cycle Tracker</p>
            <p className="logo-description">
              Help to overcome the period stigma by increasing awareness and understanding of menstruation
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <img src={Poverty} className="logo" alt="..." />
            <p className="logo-header">Education</p>
            <p className="logo-description">
              Volunteer at our organization and you will receive benefits such as pads and tampons, and/or subscription packages
            </p>
          </Box>
        </Grid>
      </Grid>  
    </Container>
  )
}

export default HomeKeyPoints;