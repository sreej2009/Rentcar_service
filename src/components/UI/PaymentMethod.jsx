import React, { useState } from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";
import Swal from "sweetalert2";

const PaymentMethod = () => {
  const [amount, setamounts] = useState(``);

  const handleSumbit = (event) => {
    event.preventDefault();
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "Submit Your Details",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes!",
    // });
    if (amount === "") {
      Swal.fire({
        title: "Enter Correct Amount to Continue the Payment",
        showClass: {
          popup: "animate__animated animate__backInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      var options = {
        key: "rzp_test_ahn0mTpIMLF8DG",
        key_secret: "AEDj2TjiQjSZG8QgPzhWHLMI",
        amount: amount * 100,
        currency: "INR",
        name: "RENT_CAR",
        description: "For Testing purpose",
        handler: function (responce) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        prefill: {
          name: "Sree",
          email: "sree.skillsafari@gmail.com",
          contact: "3456789876",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#000",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Paypal
        </label>

        <img src={paypal} alt="" />
        <div>
          <input
            className="p-1"
            type="text"
            placeholder="Enter Correct Amount"
            value={amount}
            onChange={(e) => setamounts(e.target.value)}
          />
        </div>
      </div>
      <div className="payment text-end mt-5">
        <button onClick={handleSumbit}>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
