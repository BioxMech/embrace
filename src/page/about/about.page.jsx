import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Background from '../../asset/images/background.jpg';

function About() {

  return (
    <Box my={2} style={{ textAlign: "center" }}>
      <Grid container spacing={5}>
        <Grid item xs={12} style={{ height: "100vh" }} className="home-picture-grid">
          <div className="home-picture"
            style= {{ 
              background: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${Background}) no-repeat center center fixed`, 
              backgroundSize: 'cover',
            }} 
          />
          <Box py={2} className="home-picture-box">
            <Box my={2}>
              IGNITE
            </Box>
            <Box my={2}>
              <span className="home-picture-description" >
                About IgniteUs
              </span>
            </Box>
            <Box my={2}>
              <Button className="support-button" variant="contained" style={{ backgroundColor : "#f50057" }} component="a" href="/donate">
                Support Us
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" color="text.primary">
            How We Started
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Created by Professor Utonium in an attempt to create the "perfect little girl" using a mixture of "sugar, spice, and everything nice"
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" color="text.primary">
            Our <strong>Purpose</strong>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            The purpose is strong
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default About;