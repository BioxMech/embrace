import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import HomePicture from '../../asset/images/homePicture.jpg';
import Subscribe from '../../asset/images/subscribe.svg';
import Awareness from '../../asset/images/awareness.svg';
import Poverty from '../../asset/images/poverty.svg';
import './home.styles.scss';

function Home() {
  
  return (
    // <Container maxWidth="lg" >
      <Box my={2}>
        <Grid container>
          <Grid item xs={12} style={{ height: "100vh" }} className="home-picture-grid">
            <div className="home-picture"
              style= {{ 
                background: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${HomePicture}) no-repeat center center fixed`, 
                backgroundSize: 'cover',
              }}>
            </div>
            
            {/* <img className="home-picture" src={HomePicture} alt="..." style={{ position: "absolute" }} /> */}
            <Box py={2} className="home-picture-box">
              <Box my={2}>
                Application Name
              </Box>
              <Box my={2}>
                <span className="home-picture-description" >
                  Don't let the menstruation stop you
                </span>
              </Box>
              <Box my={2}>
                <Button variant="contained" style={{ backgroundColor : "#f50057"}} component="a" href="/support">Support Us</Button>
              </Box>
              
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="lg" >
              <Grid container className="home-logo" spacing={3}>
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
                    <p className="logo-header">Spread awareness</p>
                    <p className="logo-description">
                      Help to overcome the period stigma by increasing awareness and understanding of menstruation
                    </p>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box>
                    <img src={Poverty} className="logo" alt="..." />
                    <p className="logo-header">Help Poverty</p>
                    <p className="logo-description">

                    </p>
                  </Box>
                </Grid>
              </Grid>  
            </Container>
          </Grid>
        </Grid>
      </Box>
    // </Container>
  )
}

export default Home