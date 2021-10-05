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

import Volunteer from '../../asset/images/volunteer.jpg';
import Follow from '../../asset/images/follow.png';

function Support() {

  return (
    <Box my={2} py={8}>
      <Container maxWidth="md" >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="text.primary" gutterBottom>
              Join Us
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary" >
              You can help us by 
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image={Volunteer}
                alt="Volunteer"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spread Awareness with us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" fullWidth variant="contained" style={{ backgroundColor: "#ff4081" }}>Volunteer</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Support;