import React from 'react';
import GooglePayButton from '@google-pay/button-react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function Donate() {

  return (
    <Box  my={2} py={8}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="text.primary" gutterBottom>
              OWE MONEY PAY MONEY
            </Typography>
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
        </Grid>
      </Container>
    </Box>
  )
}

export default Donate;