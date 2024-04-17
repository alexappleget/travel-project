import { useState } from "react";
import axios from "axios";

export default function Vacation({ vacation }) {
  const [details, setDetails] = useState(false);
  const [bookNow, setBookNow] = useState(false);

  return (
    <>
      <li className="listVacations-li">
        <img src={vacation.img_url} alt={`${vacation.name} poster`} />
        <div>
          <h3>{vacation.name}</h3>
          <p>{vacation.location}</p>
        </div>
        <button
          className="vacationPackage-btn"
          onClick={() => setDetails(true)}
        >
          Learn More
        </button>
      </li>

      {details === true && (
        <div className="detailsDiv">
          <Details
            vacation={vacation}
            setDetails={setDetails}
            setBookNow={setBookNow}
          />
        </div>
      )}

      {bookNow === true && (
        <div className="booknowDiv">
          <BookNow setBookNow={setBookNow} />
        </div>
      )}
    </>
  );
}

function Details({ vacation, setDetails, setBookNow }) {
  return (
    <>
      <h1>{vacation.name}</h1>
      <img src={vacation.img_url} alt={`${vacation.name} poster`} />
      <h3>{vacation.description}</h3>
      <p>Price: ${vacation.price}</p>
      <button className="close" onClick={() => setDetails(false)}>
        &#10007;
      </button>
      <button className="book-now" onClick={() => setBookNow(true)}>
        Book Now
      </button>
    </>
  );
}

function BookNow({ setBookNow }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  //Customer data
  const handleCustomer = async () => {
    try {
      const body = { firstname, lastname, email, phone };
      const res = await axios.post("http://localhost:5174/customers", body, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  };

  //Email data
  const handleEmail = async () => {
    try {
      await axios.post("http://localhost:5174/send-email", {
        recipientEmail: email, //This will be whatever email they put into the input field
      });
      setEmailSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error appropriately (e.g., show error message to user)
    }
  };

  //Function for button to run both data commands
  const handleClick = async () => {
    await handleCustomer();
    handleEmail();
  };

  return (
    <>
      <h3>Please confirm your info!</h3>
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        required
      />
      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        id="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="number"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button className="booknowBtn" onClick={handleClick}>
        Confirm Booking
      </button>
      {emailSent && (
        <p>
          This is a test to let you know the booking worked! Check your email.
        </p>
      )}
      <button className="close" onClick={() => setBookNow(false)}>
        &#10007;
      </button>
    </>
  );
}
