import { PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from "react";

export default function PaypalCheckoutButton(props) {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    // call backend function to fulfill order

    // if response is successful
    setPaidFor(true);

    // if the response is error, alert user.
  };

  if (paidFor) {
    // Display alert success message
    alert("Thank you for your donation!");
  }

  if (error) {
    // Display error message
    alert(error);
  }
  return (
    <PayPalButtons
      onClick={(data, actions) => {
        // Validate on button click, client or server side
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: product.price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);

        handleApprove(data.orderID);
      }}
      onCancel={() => {
        // Display cancel message or redirect user
      }}
      onError={(err) => {
        setError(err);
        console.log("Paypal Checkout on Error", err);
      }}
    />
  );
}
