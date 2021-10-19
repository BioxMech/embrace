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

import './donate.styles.scss';
import DonateImg from '../../asset/images/donate.jpg';

function Donate() {

  // const link = "https://embrace-b75f7.web.app/";

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
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: 'CARD',
                      parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                      },
                      tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                          gateway: 'example',
                          gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                  },
                  transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: '100.00',
                    currencyCode: 'USD',
                    countryCode: 'US',
                  },
                }}
                onLoadPaymentData={paymentRequest => {
                  alert('load payment data', paymentRequest);
                }}
              />
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