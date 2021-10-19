import React, { useContext } from 'react';
import GooglePayButton from '@google-pay/button-react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/StarBorder';
import GlobalStyles from '@mui/material/GlobalStyles';
import { createTheme } from '@mui/material/styles';

import PeriodPoverty from '../../asset/images/periodpoverty.jpg';
import Pad from '../../asset/images/pad.png';

import { subscribeList } from './subscribe';
import { AuthContext } from '../../context/auth';
import { PAYMENT_REQUEST, onPaymentDataChanged, onPaymentAuthorized } from '../payment/paymentDetails';

import './subscribe.styles.scss';

function Subscribe() {

  const { user } = useContext(AuthContext);

  return (
    <Box>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <Container maxWidth="lg">
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 6, pb: 6 }}>
          <Box style={{ textAlign: 'center' }}>
            <img src={PeriodPoverty} alt="..." style={{ width: "100%", height: "100%"}}/>
          </Box>
          <Box my={3}>
            <Typography
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Our Subscription Packages
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="h6" align="center" color="text.primary" style={{ fontWeight: 400 }}>
              Our EMBRACE sanitary pads subscription packages allow women across Telangana gain access to pads affordably and seamlessly. 
              Women can order pads on a monthly, semi-annually, or annually basis, delivered right to their doorstep. 
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" align="center" color="text.primary" style={{ fontWeight: 400 }}>
              Simply order your subscription directly on our website wherever you have internet access.
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="md" component="main" sx={{ pb: 8 }}>
          <Grid container spacing={5} alignItems="flex-end">
            { subscribeList.map(({ name, description, price, subheader, buttonText, buttonVariant }) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={ name }
                xs={12}
                sm={ name === 'SEMI-ANNUALLY' ? 12 : 6 }
                md={4}
              >
                <Card>
                  <CardHeader
                    title={ name }
                    subheader={ subheader }
                    titleTypographyProps={{ align: 'center' }}
                    action={ name === 'ANNUALLY' ? <StarIcon /> : null }
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                    className = "word"
                    style={{ backgroundColor: "#9867C5"}}
                    // sx={{
                    //   backgroundColor: (theme) =>
                    //     theme.palette.mode === 'light'
                    //       ? theme.palette.grey[200]
                    //       : theme.palette.grey[700],
                    // }}
                  />
                  <CardContent style={{ backgroundColor: "#fbd2d7"}}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                      }}
                    >
                      <Typography component="h2" variant="h3" color="text.primary">
                        ₹{ price }
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /month
                      </Typography>
                    </Box>
                    <ul>
                      { description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                    {
                      user ?
                        
                        <GooglePayButton
                          environment="TEST"
                          buttonColor="black"
                          buttonType="subscribe"
                          buttonSizeMode="230"
                          paymentRequest={ PAYMENT_REQUEST }
                          onLoadPaymentData={paymentRequest => {
                            console.log("load payment data", paymentRequest);
                          }}
                          onPaymentDataChanged={onPaymentDataChanged}
                          onPaymentAuthorized={onPaymentAuthorized}
                        />
                        
                      :
                        <Button fullWidth variant={ buttonVariant } href={`/login`}>
                          { buttonText }
                        </Button>
                    }
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* <Box my={2} py={8}> */}
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" color="text.primary" align="center">
              <i>Embrace pads come in sets. Each set has 6 pads.</i>
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
              <Box mr={2} style={{ textAlign: 'center' }}>
                <img src={Pad} alt="..." className="picture1" />
              </Box>
              <Typography variant="h6" style={{ fontWeight: 400 }} color="text.primary" align="center">
                Day Pad: 23 cm
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
              <Box mr={2} style={{ textAlign: 'center' }}>
                <img src={Pad} alt="..." className="picture2" />
              </Box>
              <Box mt={1}>
              <Typography variant="h6" style={{ fontWeight: 400 }} color="text.primary" align="center">
              Night Pad: 35 cm
              </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        {/* </Box> */}
      </Container>
    </Box>
  )
}

export default Subscribe;