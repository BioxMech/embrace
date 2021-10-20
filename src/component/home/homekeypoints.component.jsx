import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Subscribe from '../../asset/images/subscribe.svg';
import Period from '../../asset/images/period.png';
import Teach from '../../asset/images/teach.png';

import './homekeypoints.styles.scss';

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
            <Typography variant="h5" className="logo-header">
              Subscription
            </Typography>
            <Typography variant="body1" className="logo-description">
              Low subscription fee of monthly sanitary pads sets delivered to women across Telangana. 
              Our volunteers also help distribute pads to underpriviledged women.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <img src={Period} className="logo" alt="..." />
            <Typography variant="h5" className="logo-header">
              Cycle Tracker
            </Typography>
            <Typography variant="body1" className="logo-description">
              Allowing girls and women across India to track their menstruation cycles 
              conveniently - with just a few clicks on our website.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <img src={Teach} className="logo" alt="..." />
            <Typography variant="h5" className="logo-header">
              Education
            </Typography>
            <Typography variant="body1" className="logo-description">
              Destigmatizing menstruation through online and offline education efforts, such as Embrace Blog and volunteering.
            </Typography>
          </Box>
        </Grid>
      </Grid>  
    </Container>
  )
}

export default HomeKeyPoints;