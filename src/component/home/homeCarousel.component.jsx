import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';

import { carouselList } from './carousel';

function AnimationGreetings({ isCenter }) {
  return (
    <Container maxWidth="sm" >
      <Grid container>
        <Grid item xs={12} sm={6} sx={{ textAlign: isCenter ? 'center' : 'right' }}>
          <Box mr={1}>
            <Typography variant="h5">
              Our Mission:
              {/* &nbsp; The Public */}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: isCenter ? 'center' : 'left' }}>
          <Typography variant="h5">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("<strong style='color: purple'>Embrace Period</strong>")
                  // .callFunction(() => {
                  //   console.log('String typed out!');
                  // })
                  .pauseFor(2500)
                  // .deleteChars(7)
                  .changeDeleteSpeed(1)
                  .deleteAll()
                  .typeString("<strong style='color: blue'>Educate The Public</strong>")
                  .pauseFor(2500)
                  .changeDeleteSpeed(1)
                  .deleteAll()
                  .typeString("<strong style='color: #f50057'>Empower Women</strong>")
                  .pauseFor(2500)
                  // .callFunction(() => {
                  //   console.log('All strings were deleted');
                  // })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
                deleteSpeed: 1
              }}
            />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

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
              <AnimationGreetings isCenter={false} />
            </Box>
            <Box my={2}>
              <span className="home-picture-description" >
                Let's talk PERIODS
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
            <Box my={2} sx={{ display: 'flex', justifyContent: 'center' }}>
              <AnimationGreetings isCenter={true} />
            </Box>
            <Box my={2}>
              <span className="home-picture-description" >
                Let's talk PERIODS
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