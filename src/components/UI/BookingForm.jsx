import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [persons, setPersons] = useState("");
  const [luggages, setLuggages] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [journeyTime, setJourneyTime] = useState("");
  const [comments, setComments] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Perform form validation here
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !fromAddress ||
      !journeyDate ||
      !journeyTime
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
      fromAddress,
      toAddress,
      persons,
      luggages,
      journeyDate,
      journeyTime,
      comments,
    });

    // Clear form fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setFromAddress("");
    setToAddress("");
    setPersons("");
    setLuggages("");
    setJourneyDate("");
    setJourneyTime("");
    setComments("");

    // Reload the page after successful submission
    window.location.reload();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="" required>
          <option value=" person">Add Persons</option>
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4+ person">4+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value=" luggage">Add Luggages</option>
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4+ luggage">4+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
          required
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>

      <div className="payment text-center mt-2">
        <button type="submit">Submit Details</button>
      </div>
    </Form>
  );
};

export default BookingForm;
