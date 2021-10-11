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

import { subscribeList } from './subscribe';
import { AuthContext } from '../../context/auth';
import { PAYMENT_REQUEST, onPaymentDataChanged, onPaymentAuthorized } from '../payment/paymentDetails';

function Subscribe() {

  const { user } = useContext(AuthContext);

  return (
    <Box>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <Container maxWidth="lg">
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 6, pb: 6 }}>
          <Typography
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Subscription
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" component="p">
            Quickly build an effective pricing table for your potential customers with
            this layout. It&apos;s built with default MUI components with little
            customization.
          </Typography>
        </Container>
        <Container maxWidth="md" component="main" sx={{ pb: 8 }}>
          <Grid container spacing={5} alignItems="flex-end">
            { subscribeList.map(({ name, description, price, subheader, buttonText, buttonVariant }) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={ name }
                xs={12}
                sm={ name === 'Semi-annually' ? 12 : 6 }
                md={4}
              >
                <Card>
                  <CardHeader
                    title={ name }
                    subheader={ subheader }
                    titleTypographyProps={{ align: 'center' }}
                    action={ name === 'Annually' ? <StarIcon /> : null }
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
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
                        /mo
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
                  <CardActions>
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
      </Container>
    </Box>
  )
}

export default Subscribe;