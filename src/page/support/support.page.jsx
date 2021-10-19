import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Distribution from '../../asset/images/distribution.jpeg';
import Education from '../../asset/images/education.jpg';
import Follow from '../../asset/images/follow.png';

function Support() {

  return (
    <Box my={2} py={8}>
      <Container maxWidth="md" >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="text.primary" gutterBottom>
              Volunteer 
            </Typography>
            <Typography style={{color:"#ff4081"}} variant="h4" align="center" color="text.secondary" >
              Support our efforts
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image={Distribution}
                alt="Distribution"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                  Distribute with us
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                Help EMBRACE pack pads into subscription packages and help us distribute pads to schools, organizations, and villages throughout India.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" fullWidth variant="contained" style={{ backgroundColor: "#ff4081" }}>Sign Up as a Distributor</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image={Education}
                alt="Education"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                  Spread Awareness with us
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                Help to educate girls and women in India about menstruation and spread awareness for menstrual hygiene through fun activities. 
                Help girls break the stigma and embrace their bodies.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" fullWidth variant="contained" style={{ backgroundColor: "#ff4081" }}>Sign Up as a Volunteer</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box  my={2} py={8}>
      <Container maxWidth="md">
        <Grid container style={{ textAlign: 'center' }}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="text.primary" gutterBottom>
              Follow Our Social Media
            </Typography>
            <Typography style={{color:"#ff4081"}} variant="h4" align="center" color="text.primary" gutterBottom>
              Spread our efforts
            </Typography>
          </Grid>
          </Grid>
          </Container>
          </Box>

      <Box>
      <Container maxWidth="xs">
        <Grid container style={{ textAlign: 'center' }}>
          <Grid item xs={4} pr={2}>
          <Button size="small" fullWidth variant="contained" component="a" href="www.facebook.com">Facebook</Button>
          </Grid>
          <Grid item xs={4} pr={2}>
          <Button size="small" fullWidth variant="contained" style={{ backgroundColor: "#00A9E8" }} component="a" href="www.twitter.com">Twitter</Button>
          </Grid>
        </Grid>
      </Container>
      </Box>
          {/* <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image={Follow}
                alt="Follow Us"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Follow our social media!!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Follow us at our social media and help spread the news!! 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" fullWidth variant="contained" component="a" href="www.facebook.com">Facebook</Button>
              </CardActions>
              <CardActions>
                <Button size="small" fullWidth variant="contained" style={{ backgroundColor: "#00A9E8" }} component="a" href="www.twitter.com">Twitter</Button>
              </CardActions>
            </Card>
          </Grid> */}
        
    </Box>
  )
}

export default Support;