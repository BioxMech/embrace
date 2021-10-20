export const PAYMENT_REQUEST = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [
    {
      type: "CARD",
      parameters: {
        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        allowedCardNetworks: ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"]
      },
      tokenizationSpecification: {
        type: "PAYMENT_GATEWAY",
        parameters: {
          gateway: "example",
          gatewayMerchantId: 'exampleGatewayMerchantId',
        }
      }
    }
  ],
  merchantInfo: {
    merchantId: "12345678901234567890",
    merchantName: "Embrace"
  },
  transactionInfo: {
    displayItems: [
      {
        label: "Subtotal",
        type: "SUBTOTAL",
        price: "2900.00",
      },
      {
        label: "Tax",
        type: "TAX",
        price: "100.00",
      }
    ],
    countryCode: 'IN',
    currencyCode: "INR",
    totalPriceStatus: "FINAL",
    totalPrice: "3000.00",
    totalPriceLabel: "Total"
  },
  callbackIntents: [
    "SHIPPING_ADDRESS",  "SHIPPING_OPTION", "PAYMENT_AUTHORIZATION"
  ],
  shippingAddressRequired: true,
  shippingOptionRequired : true,
  shippingAddressParameters: {
    phoneNumberRequired: true
  }
}

export function onPaymentAuthorized(paymentData) {
  return new Promise(function(resolve, reject){

  // handle the response
  processPayment(paymentData)
    .then(function() {
      resolve({transactionState: 'SUCCESS'});
    })
    .catch(function() {
        resolve({
        transactionState: 'ERROR',
        error: {
          intent: 'PAYMENT_AUTHORIZATION',
          message: 'Insufficient funds',
          reason: 'PAYMENT_DATA_INVALID'
        }
      });
    });

  });
}

function processPayment(paymentData) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // show returned data in developer console for debugging
      console.log(paymentData);
      // @todo pass payment token to your gateway to process payment
      // let paymentToken = paymentData.paymentMethodData.tokenizationData.token;

      resolve({});
    }, 3000);
  });
}


export function onPaymentDataChanged(intermediatePaymentData) {
  return new Promise(function(resolve, reject) {

    let shippingAddress = intermediatePaymentData.shippingAddress;
    let shippingOptionData = intermediatePaymentData.shippingOptionData;
    let paymentDataRequestUpdate = {};

    if (intermediatePaymentData.callbackTrigger === "INITIALIZE" || intermediatePaymentData.callbackTrigger === "SHIPPING_ADDRESS") {
      if(shippingAddress.administrativeArea === "NJ")  {
        paymentDataRequestUpdate.error = getGoogleUnserviceableAddressError();
      }
      else {
        paymentDataRequestUpdate.newShippingOptionParameters = getGoogleDefaultShippingOptions();
        let selectedShippingOptionId = paymentDataRequestUpdate.newShippingOptionParameters.defaultSelectedOptionId;
        paymentDataRequestUpdate.newTransactionInfo = calculateNewTransactionInfo(selectedShippingOptionId);
      }
    }
    else if (intermediatePaymentData.callbackTrigger === "SHIPPING_OPTION") {
      paymentDataRequestUpdate.newTransactionInfo = calculateNewTransactionInfo(shippingOptionData.id);
    }

    resolve(paymentDataRequestUpdate);
  });
}

function getGoogleUnserviceableAddressError() {
  return {
    reason: "SHIPPING_ADDRESS_UNSERVICEABLE",
    message: "Cannot ship to the selected address",
    intent: "SHIPPING_ADDRESS"
  };
}

function getGoogleDefaultShippingOptions() {
  return {
    defaultSelectedOptionId: "shipping-001",
    shippingOptions: [
      {
        "id": "shipping-001",
        "label": "Free: Standard shipping",
        "description": "Free Shipping delivered in 5 business days."
      },
      {
        "id": "shipping-002",
        "label": "$10.00: Standard shipping",
        "description": "Standard shipping delivered in 3 business days."
      },
      {
        "id": "shipping-003",
        "label": "$50.00: Express shipping",
        "description": "Express shipping delivered in 1 business day."
      },
    ]
  };
}

function calculateNewTransactionInfo(shippingOptionId) {
  let newTransactionInfo = getGoogleTransactionInfo();

  let shippingCost = getShippingCosts()[shippingOptionId];
  newTransactionInfo.displayItems.push({
    type: "LINE_ITEM",
    label: "Shipping cost",
    price: shippingCost,
    status: "FINAL"
  });

  let totalPrice = 0.00;
  newTransactionInfo.displayItems.forEach(displayItem => totalPrice += parseFloat(displayItem.price));
  newTransactionInfo.totalPrice = totalPrice.toString();

  return newTransactionInfo;
}

function getGoogleTransactionInfo() {
  return {
    displayItems: [
      {
        label: "Subtotal",
        type: "SUBTOTAL",
        price: "2900.00",
      },
      {
        label: "Tax",
        type: "TAX",
        price: "100.00",
      }
    ],
    countryCode: 'IN',
    currencyCode: "INR",
    totalPriceStatus: "FINAL",
    totalPrice: "3000.00",
    totalPriceLabel: "Total"
  };
}

function getShippingCosts() {
  return {
    "shipping-001": "0.00",
    "shipping-002": "10.00",
    "shipping-003": "50.00"
  }
}