import React from "react";
import {  useState } from "react";
import {  useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { addOrder } from "../Redux/product/action";
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const Razor = () => {
  const [payData, setPayData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let saved = 0;
  const cart = useSelector((state) => state.products.cart);
  let total = cart.reduce(function (acc, cv) {
    return acc + Math.floor(cv.price);
  }, 0);

  saved = cart.reduce(function (acc, e) {
    return (
      acc + (Math.floor(e.price) - Math.floor(e.price - (10 * e.price) / 100))
    );
  }, 0);

  let sum = total - saved;
  
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const data = await fetch(
      `https://web-production-ae8c.up.railway.app/razorpay?price=${sum}`,
      {
        method: "POST",
      }
    ).then((t) => t.json());
  

    const options = {
      // key: "rzp_test_IMNRoKWg4hTR5R",//old
      //   key: "rzp_test_XmZRCQRG4zhL6B", //new
      key: "rzp_test_Mg2MeEGX1Eyeh2",
      currency: data.currency,
      amount: data.amount,
      name: "Big Basket",
      description: "Wallet Transaction",
      order_id: data.id,
      handler: function (response) {
        setPayData(response.razorpay_payment_id);
        alert("PAYMENT ID ::" + response.razorpay_payment_id);
        const paymentdata = {
          paymentid: response.razorpay_payment_id,
          amount: sum,
        };
        dispatch(addOrder(paymentdata));
        navigate("/");
      },

      prefill: {
        name: "BigBasket",
        email: "rspatil3562@gmail.com",
        contact: "9075613562",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div>
      <Button
        variant={"solid"}
        _hover={{ bg: "#84c225" }}
        _expanded={{ bg: "#84c225" }}
        _focus={{ boxShadow: "#e8e8e8" }}
        focusBorderColor="#e8e8e8"
        colorScheme="white"
        errorBorderColor="#e8e8e8"
        borderRadius="0"
        borderWidth="0.025px"
        bg="#84c225"
        mt="1rem"
        onClick={displayRazorpay}
      >
        Place Order & Pay
      </Button>
      <br />
    </div>
  );
};
