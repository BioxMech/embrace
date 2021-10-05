import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';

import { carouselList } from './carousel';

function HomeCarousel() {
  
  return (
    <>
      {/* ========== Desktop ========== */}
      <Hidden smDown>
        <Grid item xs={12} style={{ height: "100vh" }} className="home-picture-grid">
          <div style={{ position: "absolute"}}>
          <Carousel 
            autoPlay 
            autoFocus 
            infiniteLoop 
            showArrows={false} 
            showIndicators={false} 
            showThumbs={false}
            stopOnHover={false}
            animationHandler="fade"
            swipeable={false}
            showStatus={false}
            interval="4000"
          >
            {
              carouselList.map(({ src, alt }) => (
                <div style={{ backgroundColor: "black"}}>
                  <img src={src} alt={alt} style={{ width: "100%", height: "100vh", opacity: "0.5" }} key={alt} />
                </div>
              ))
            }
          </Carousel>
        </div>
          <Box py={2} className="home-picture-box">
            <Box my={2}>
              IGNITE
            </Box>
            <Box my={2}>
              <span className="home-picture-description" >
                Bleed Free
              </span>
            </Box>
            <Box my={2}>
              <Button className="support-button" variant="contained" style={{ backgroundColor : "#f50057" }} component="a" href="/donate">
                Support Us
              </Button>
            </Box>
          </Box>
        </Grid>
      </Hidden>


      {/* ========== Mobile ========== */}
      <Hidden smUp>
        <Grid item xs={12} style={{ height: "50vh" }} className="home-picture-grid">
          <div style={{ position: "absolute"}}>
          <Carousel 
            autoPlay 
            autoFocus 
            infiniteLoop 
            showArrows={false} 
            showIndicators={false} 
            showThumbs={false}
            stopOnHover={false}
            animationHandler="fade"
            swipeable={false}
            showStatus={false}
            interval="5000"
          >
            {
              carouselList.map(({ src, alt }) => (
                <div style={{ backgroundColor: "black"}}>
                  <img src={src} alt={alt} style={{ width: "100%", height: "50vh", opacity: "0.5" }} key={alt} />
                </div>
              ))
            }
          </Carousel>
        </div>
          <Box py={2} className="home-picture-box" style={{ marginTop: "12vh" }}>
            <Box my={2}>
              IGNITE
            </Box>
            <Box my={2}>
              <span className="home-picture-description" >
                Bleed Free
              </span>
            </Box>
            <Box my={2}>
              <Button className="support-button" variant="contained" style={{ backgroundColor : "#f50057" }} component="a" href="/donate">
                Support Us
              </Button>
            </Box>
          </Box>
        </Grid>
      </Hidden>
    </>
  )
}

export default HomeCarousel;