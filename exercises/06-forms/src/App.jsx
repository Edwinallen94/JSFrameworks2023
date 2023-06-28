import { useState } from "react";
import "./App.css";
// Import here
// import { useState } from "react";
import countries from "./assets/countries.json";
import states from "./assets/states.json";
function App() {
  const [addfirstName, setfirstName] = useState();
  const [addlastName, setlastName] = useState();
  const [addaddressLine1, setaddressLine1] = useState();
  const [addcity, setcity] = useState();
  const [addstate, setstate] = useState();
  const [addpostalCode, setpostalCode] = useState();
  const [addcountry, setcountry] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="container mt-4" method="POST">
      {/* You will need to handle form submission */}

      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="addfirstName"
          value={addfirstName}
          onChange={(e) => setfirstName(e.target.value)}
          name="firstName"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="addlastName"
          value={addlastName}
          onChange={(e) => setlastName(e.target.value)}
          name="lastName"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addaddressLine1"
          value={addaddressLine1}
          onChange={(e) => setaddressLine1(e.target.value)}
          name="addressLine1"
          type="text"
          className="form-control"
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input
          id="addcity"
          name="city"
          value={addcity}
          onChange={(e) => setcity(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select
          id="state"
          name="state"
          onChange={(e) => setstate(e.target.value)}
          className="form-control"
        >
          {Object.values(states).map((state) => {
            return (
              <>
                <option key={state} value={state}>
                  {state}
                </option>
              </>
            );
          })}
          ;
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          value={addpostalCode}
          onChange={(e) => setpostalCode(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select
          id="country"
          name="country"
          value={addcountry}
          onChange={(e) => setcountry(e.target.value)}
          className="form-control"
        >
          {Object.values(countries).map((country) => {
            return (
              <>
                <option key={country} value={country}>
                  {country}
                </option>
              </>
            );
          })}
          ;
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
          id="signUpForNewsLetter"
          name="signUpForNewsLetter"
          type="checkbox"
          className="form-check-input"
        />
        <label htmlFor="signUpForNewsLetter" className="form-check-label">
          Sign Up For Newsletter
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}

      {true && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {/* Add <li></li> tags here */}
          </ul>
          <li>First Name: {addfirstName}</li>
          <li>Last Name: {addlastName}</li>
          <li>Address: {addaddressLine1}</li>
          <li>City: {addcity}</li>
          <li>Postal: {addpostalCode}</li>
          <li>State: {addstate}</li>
          <li>Country: {addcountry}</li>
        </div>
      )}
    </form>
  );
}

export default App;
