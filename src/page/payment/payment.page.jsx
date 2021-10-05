import React from 'react';
import GooglePayButton from '@google-pay/button-react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';

import { PAYMENT_REQUEST, onPaymentDataChanged, onPaymentAuthorized } from './paymentDetails';

function Payment() {

  return (
    <div>
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
    </div>
  )
}

export default Payment;