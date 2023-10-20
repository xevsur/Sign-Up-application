import React, { useState } from "react";
import "./App.css";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      !isPasswordValid(password)
    ) {
      setFormSubmitted(true);
      setFormSuccess(false);
    } else {
      setFormSubmitted(true);
      setFormSuccess(true);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailValid(event.target.checkValidity());
  };

  const isPasswordValid = (password: string) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,16}$/;
    return regex.test(password);
  };

  return (
    <div className="mainPage">
      <div className="textCont">
        <h1>Learn to code by watching others</h1>
        <p className="topText">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="background-image"></div>
      <div className="container">
        <div className="content">
          <button
            type="submit"
            className="sales-btn"
            onClick={() => setFormSubmitted(true)}
          >
            Try it free 7 days <span>then $20/mo. thereafter</span>
          </button>
          <form onSubmit={handleSubmit}>
            <div
              className={`form-group ${
                formSubmitted && firstName === "" ? "error" : ""
              }`}
            >
              <input
                type="text"
                placeholder="First Name"
                className={`input-field ${
                  formSubmitted && firstName === "" ? "error" : ""
                }`}
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              {formSubmitted && firstName === "" && (
                <div className="error-message">
                  Please enter your first name
                </div>
              )}
            </div>
            <div
              className={`form-group ${
                formSubmitted && lastName === "" ? "error" : ""
              }`}
            >
              <input
                type="text"
                placeholder="Last Name"
                className={`input-field ${
                  formSubmitted && lastName === "" ? "error" : ""
                }`}
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              {formSubmitted && lastName === "" && (
                <div className="error-message">Please enter your last name</div>
              )}
            </div>
            <div
              className={`form-group ${
                formSubmitted && !emailValid ? "error" : ""
              }`}
            >
              <input
                type="email"
                placeholder="Email Address"
                className={`input-field ${
                  formSubmitted && !emailValid ? "error" : ""
                }`}
                value={email}
                onChange={handleEmailChange}
              />
              {formSubmitted && !emailValid && (
                <div className="error-message">
                  Please enter a valid email address
                </div>
              )}
            </div>
            <div
              className={`form-group ${
                formSubmitted && !isPasswordValid(password) ? "error" : ""
              }`}
            >
              <input
                type="password"
                placeholder="Password"
                className={`input-field ${
                  formSubmitted && !isPasswordValid(password) ? "error" : ""
                }`}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {formSubmitted && !isPasswordValid(password) && (
                <div className="error-message">
                  Password must have 6 to 16 characters,start with a letter,
                  have at least 1 number, and have at least 1 special character
                </div>
              )}
            </div>
            <button type="submit" className="cta-button">
              Claim Your Free Trial
            </button>
            {formSubmitted && formSuccess && (
              <div className="success-message">
                Success! Please check your email
              </div>
            )}
            <p className="cta-terms">
              By clicking the button, you are agreeing to our{" "}
              <a href="#">Terms and Services</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
