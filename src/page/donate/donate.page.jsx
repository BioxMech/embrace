import React from 'react';
import GooglePayButton from '@google-pay/button-react';
// import { 
//   FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton, LineShareButton, EmailShareButton,
//   FacebookIcon, TelegramIcon,  TwitterIcon, WhatsappIcon, LineIcon, EmailIcon
// } from "react-share";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import './donate.styles.scss';
import DonateImg from '../../asset/images/donate.jpg';
import { PAYMENT_REQUEST, onPaymentDataChanged, onPaymentAuthorized } from '../payment/paymentDetails';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Donate() {

  // const link = "https://embrace-b75f7.web.app/";
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box  my={2} py={8}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" style={{ fontWeight: 800 }} align="center" color="text.primary" gutterBottom>
              Donate Now
            </Typography>
            <Typography style={{color:"#ff4081", fontWeight: 800}} variant="h4" align="center" gutterBottom>
              We Need <i>Your</i> Help
            </Typography>
            <Box mt={5} mb={5}>
              <Typography variant="h6" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                YOU can help us change the lives of 23 million girls - who drop out of school due to lack of menstrual hygiene and awareness. With as little as $1 you can prevent a girl in India from dropping out of school and change her life.
              </Typography>
            </Box>
            <Box mb={5}>
              <Typography variant="body1" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                Come join us on this journey of normalizing menstruation in India. Your gift will go a long way in empowering women all across Telangana and beyond in the future.
              </Typography>
              <Typography variant="body1" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                Your gift will go a long way in empowering women all across Telangana and beyond in the future.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} >
            <Box mb={3} style={{ textAlign: 'center' }}>
              <img src={DonateImg} alt="..." className="donate-img" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ textAlign: "center" }}>
              <GooglePayButton
                environment="TEST"
                buttonType="donate"
                paymentRequest={PAYMENT_REQUEST}
                onLoadPaymentData={paymentRequest => {
                  alert('load payment data', paymentRequest);
                  handleClick();
                }}
                onPaymentDataChanged={onPaymentDataChanged}
                onPaymentAuthorized={onPaymentAuthorized}
              />
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Thank you very much for donating!! We at EMBRACE, thank you.
                </Alert>
              </Snackbar>
            </Box>
          </Grid>
          <Grid item xs={12}>
          <Box my={5}>
            <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom >
            We are registered under FCRA to receive donations from foreign sources.
            </Typography>
          </Box>
          </Grid>

          {/* <Grid item xs={12}>
            <Container maxWidth="sm">
              <Grid container style={{ textAlign: 'center' }}>
                <Grid item xs={2}>
                  <FacebookShareButton url={link}><FacebookIcon size={40} round={true} /></FacebookShareButton>
                </Grid>
                <Grid item xs={2}>
                  <TwitterShareButton url={link}><TwitterIcon size={40} round={true} /></TwitterShareButton>
                </Grid>
                <Grid item xs={2}>
                  <WhatsappShareButton url={link}><WhatsappIcon size={40} round={true} /></WhatsappShareButton>
                </Grid>  
                <Grid item xs={2}>
                  <TelegramShareButton url={link}><TelegramIcon size={40} round={true} /></TelegramShareButton>
                </Grid>  
                <Grid item xs={2}>
                  <LineShareButton url={link}><LineIcon size={40} round={true} /></LineShareButton>
                </Grid>  
                <Grid item xs={2}>
                  <EmailShareButton url={link}><EmailIcon size={40} round={true} /></EmailShareButton>
                </Grid>  
              </Grid>
            </Container>
          </Grid> */}

        </Grid>
      </Container>
    </Box>
  )
}

export default Donate;