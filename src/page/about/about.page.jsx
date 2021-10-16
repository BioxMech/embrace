import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Background from '../../asset/images/background.jpg';

import MenstrualCalendar from '../../asset/images/menstruationcalendar.png';
import MenstrualCycle from '../../asset/images/menstrualcycle.png';
import menstruation from '../../asset/images/menstruation.png';

import './about.styles.scss';

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
        {/* <Container maxWidth ="md"> */}
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h3" color="text.primary">
                  How We Started
                </Typography>
                <Typography variant="h6" color="text.secondary" style={{ fontWeight: 300}}>
                We identified that women in India have a lack of access to pads to sanitary pads. With the stigma and shame in buying pads, this made it more difficult for women to adopt necessary hygiene towards the natural process of menstruation. With this in mind, our team wanted to empower women to gain easy access to pads, speak up about this stigma, and tackle the problem of gender inequality in India. 
                </Typography>
                <Box pt={3}>
                <Typography variant="h6" color="text.secondary" style={{ fontWeight: 300}}>
                We created EMBRACE to allow all women in India to use a seamless ordering system to purchase affordable pad subscription packages, as well as easily track their menstruation cycles anytime and anywhere with internet access.
                </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" color="text.primary" style={{ fontWeight: 300}}>
                  Our <strong>Purpose</strong>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        {/* </Container> */}
        
        <Grid item xs={12}>
          <Container maxWidth="md" >
            <Grid container className="about-logo" spacing={3} style={{ marginTop: "5vh" }}>
            <Grid item xs={12} md={4} >
              <Box>
                <img src={MenstrualCalendar} className="logo" alt="..." />
                <p className="logo-header">Educate</p>
                <p className="logo-description">
                We want to educate women about menstruation cycle and period hygiene.
                </p>
              </Box>
            </Grid>
              
            <Grid item xs={12} md={4} >
              <Box>
                <img src={MenstrualCycle} className="logo" alt="..." />
                <p className="logo-header">Embrace</p>
                <p className="logo-description">
                We want to embrace the pain and suffering of women who face pad poverty monthly.
                </p>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} >
              <Box>
                <img src={menstruation} className="logo" alt="..." />
                <p className="logo-header">Empower</p>
                <p className="logo-description">
                We hope to empower women to speak up about menstruation and destigmatise this issue. 
                </p>
              </Box>
            </Grid>
            
            </Grid>
          </Container>
        </Grid>

        {/* <Typography variant="h4" style={{ fontWeight: 500}}>
          Educate
        </Typography>  
        <Typography variant="body1" style={{ fontWeight: 300}}>
        We want to educate women about menstruation cycle and period hygiene.
        </Typography> 
        <img src={MenstrualCalendar} alt="..." style={{ width: "65px", align: "center" }}/>
        </Grid>

        <Grid item xs={12} md={4}>
        <Typography variant="h4" style={{ fontWeight: 500}}>
          Embrace
        </Typography>
        <Typography variant="body1" style={{ fontWeight: 300}}>
        We want to embrace the pain and suffering of women who face pad poverty monthly.
        </Typography> 
        <img src={MenstrualCycle} alt="..." style={{ width: "65px", align: "center" }}/>
        </Grid>

        <Grid item xs={12} md={4}>
        <Typography variant="h4" style={{ fontWeight: 500}}>
          Empower
        </Typography>
        <Typography variant="body1" style={{ fontWeight: 300}}>
        We hope to empower women to speak up about menstruation and destigmatise this issue. 
        </Typography> 
        <img src={menstruation} alt="..." style={{ width: "65px", align: "center" }}/>
        </Grid> */}
      
      </Grid>
    </Box>
  )
}

export default About;