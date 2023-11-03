import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    //console.log("clicked");

    setEmail(document.getElementById("email").value);
    setPassword(document.getElementById("password").value);

    console.log(email, password);

    const loginData = {
      email,
      password,
    };

    const loginUser = (userData) => {
      axios
        .post("https://backend-mu-pied.vercel.app/users/login", userData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.status === true) {
            window.location.href = "./signup";
          }
        });
    };

    loginUser(loginData);
  };
  return (
    <div className="container">
      <Card style={{ width: "25rem", height: "22rem" }}>
        <Card.Header>
          <h2>LOGIN</h2>
        </Card.Header>
        <Card.Body>
          <form action="">
            <div className="form-floating mb-4 mt-3">
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="form-control"
                required
              />
              <label for="email">Email</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                id="password"
                placeholder="Enter Your password"
                className="form-control"
                required
              />
              <label for="password">Password</label>
            </div>

            <Button variant="primary" onClick={login}>
              Login
            </Button>
          </form>
        </Card.Body>
        <Card.Footer>
          <span>
            Don't Have an Account? <a href="./signup">Signup</a>
          </span>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Login;
