import React from 'react';
import { 
  FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton, LineShareButton, EmailShareButton,
  FacebookIcon, TelegramIcon,  TwitterIcon, WhatsappIcon, LineIcon, EmailIcon
} from "react-share";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

import Distribution from '../../asset/images/distribution.jpeg';
import Education from '../../asset/images/education.jpeg';
import Facebook from '../../asset/images/facebook.svg';
import Twitter from '../../asset/images/twitter.svg';

import './support.styles.scss';

function Support() {

  const link = "https://embrace-b75f7.web.app/";

  return (
    <Box my={2} py={8}>
      <Container maxWidth="md" >
        <Grid container spacing={5} mb={5}>
        <Grid item xs={12}>
            <Typography variant="h3" align="center" color="text.primary" gutterBottom>
            <strong className="card-header">Join Us</strong>
            </Typography>
            <Typography variant="h6" align="center" color="text.primary" style={{ fontWeight: 400 }}>
            <i>Join our <strong className="about-header">EMBRACE</strong> movement by following us on socials and volunteering with us. Help us be one step closer to destigmatizing menstruation in India. </i>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="text.primary" gutterBottom>
            <strong className="card-header">Volunteer</strong>
            </Typography>
            <Typography style={{color:"#ff4081"}} variant="h4" align="center" color="text.secondary" >
              Support our efforts
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
            <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#fbd2d7" }}>
              <CardMedia
                component="img"
                height="250"
                image={Distribution}
                alt="Distribution"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                <strong className="card-header">Distribute with us</strong>
                </Typography>
                <Typography variant="body2" color="text.primary" align="center">
                  Help EMBRACE pack pads into subscription packages and help us distribute pads to schools, organizations, and villages throughout India.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" fullWidth variant="contained" style={{ backgroundColor: "#9867C5", marginTop: "20px" }} target="_blank" rel="noreferrer noopener" href="https://tinyurl.com/embracedistributor">Sign Up as a Distributor</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center' }}>
            <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#fbd2d7" }}>
              <CardMedia
                component="img"
                height="250"
                image={Education}
                alt="Education"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center" >
                <strong className="card-header">Spread Awareness with us</strong>
                </Typography>
                <Typography variant="body2" color="text.primary" align="center">
                  Help to educate girls and women in India about menstruation and spread awareness for menstrual hygiene through fun activities. 
                  Help girls break the stigma and embrace their bodies.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" fullWidth variant="contained" style={{ backgroundColor: "#ff4081"}} target="_blank" rel="noreferrer noopener" href="https://tinyurl.com/embraceeducator">Sign Up as a Volunteer</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box  my={2} py={8}>
        <Container maxWidth="md">
          <Grid container style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" color="text.primary" gutterBottom>
                Follow Us On Social Media
              </Typography>
              <Box my={3}>
                <Container maxWidth="sm">
                  <Grid container style={{ textAlign: 'center', margin: 'auto' }}>
                    <Grid item xs={6} pr={2}>
                      <Button 
                        className="facebook"
                        fullWidth
                        variant="contained"
                        target="_blank" 
                        rel="noreferrer noopener"
                        component="a"
                        href="https://www.facebook.com/Embrace-112771584520374/?ref=page_internal"
                        sx={{ mb: 2 }} 
                        startIcon={<Icon style={{ display: 'flex', alignItems: "center" }} ><img src={Facebook} alt="Facebook" className="facebook-icon" /></Icon>}
                      >Follow us on Facebook</Button>  
                    </Grid>
                    <Grid item xs={6} pr={2}>
                      <Button 
                        target="_blank" 
                        rel="noreferrer noopener"
                        component="a" 
                        href="https://twitter.com/embraceignite"
                        className="twitter"
                        fullWidth
                        variant="contained"
                        sx={{ mb: 2 }} 
                        startIcon={<Icon sx={{ display: 'flex', alignItems: "center" }} ><img src={Twitter} alt="Twitter" className="twitter-icon" /></Icon>}
                      >Follow Us On Twitter</Button>       
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box my={3}>
                <Typography style={{color: "#9867C5", fontStyle: "italic"}} variant="h4" align="center" color="text.primary" gutterBottom>
                  Stay updated & Share our movement
                </Typography>
              </Box>
              <Grid item xs={12}>
                <Container maxWidth="sm">
                  <Grid container style={{ textAlign: 'center' }} spacing={2}>
                    <Grid item xs={3} sm={2}>
                      <FacebookShareButton url={link} quote="Embrace Period with us!!: "><FacebookIcon size={40} round={true} /></FacebookShareButton>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <TwitterShareButton url={link} title="Embrace Period with us!!: " hashtags={["freeperiod", "periodisnormal"]}><TwitterIcon size={40} round={true} /></TwitterShareButton>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <WhatsappShareButton url={link} title="Embrace Period with us!!: "><WhatsappIcon size={40} round={true} /></WhatsappShareButton>
                    </Grid>  
                    <Grid item xs={3} sm={2}>
                      <TelegramShareButton url={link}><TelegramIcon size={40} round={true} /></TelegramShareButton>
                    </Grid>  
                    <Grid item xs={6} sm={2}>
                      <LineShareButton url={link} title="Embrace Period with us!!: "><LineIcon size={40} round={true} /></LineShareButton>
                    </Grid>  
                    <Grid item xs={6} sm={2}>
                      <EmailShareButton url={link} subject="Embrace Period with us!!: " body="We, Embrace, would love to have your support in spreading the awareness of period in India, and possibly worldwide!"><EmailIcon size={40} round={true} /></EmailShareButton>
                    </Grid>  
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>        
    </Box>
  )
}

export default Support;