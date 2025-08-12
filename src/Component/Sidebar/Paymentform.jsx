import React, { useRef } from "react";
import { TextField, Button } from "@mui/material";

const PaymentForm = () => {
  const cardNumberRef = useRef();
  const expiryRef = useRef();
  const cvvRef = useRef();
  const nameRef = useRef();

  const handlePayment = (e) => {
    e.preventDefault();
    const cardData = {
      cardNumber: cardNumberRef.current.value,
      expiry: expiryRef.current.value,
      cvv: cvvRef.current.value,
      name: nameRef.current.value,
    };
    console.log("Card Data:", cardData);
    // send to payment gateway sandbox API here
  };

  return (
    <div className="" style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Payment Details</h2>
      <form onSubmit={handlePayment}>
        <TextField
          inputRef={cardNumberRef}
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          inputRef={expiryRef}
          label="Expiry Date"
          placeholder="MM/YY"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          inputRef={cvvRef}
          label="CVV"
          placeholder="123"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          inputRef={nameRef}
          label="Name on Card"
          placeholder="John Doe"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 16 }}
        >
          Pay Now
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;