import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HKfogIWHlkhPJNUUU86wrkx3nYCYBPirXVVnrk91M3mnMuYC5Cf0K6jWZtwFB1e7lZNRMuQ4Fu9ek18Ss58Lct300sGJXwcWF";

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      stripeKey={publishableKey}
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      publishableKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
