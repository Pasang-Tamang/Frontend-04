import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const signup = (e) => {
    e.preventDefault();
    //console.log("clicked");

    setFullname(document.getElementById("fullname").value);
    setEmail(document.getElementById("email").value);
    setPassword(document.getElementById("password").value);

    console.log(fullname, email, password);

    const signupData = {
      fullname,
      email,
      password,
    };

    const signupUser = (userData) => {
      axios
        .post("https://backend-mu-pied.vercel.app/users/register", userData)
        .then((response) => {
          //console.log(response);
          if (response.data.status) {
            toast.success(response.data.message, {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    };

    signupUser(signupData);
  };
  return (
    <div className="container">
      <Card style={{ width: "25rem", height: "26rem" }}>
        <Card.Header>
          <h3>SIGNUP</h3>
        </Card.Header>
        <Card.Body>
          <form action="">
            <div className="form-group form-floating mb-4">
              <input
                type="text"
                id="fullname"
                placeholder="Enter Full Name"
                className="form-control input-sm"
                required
              />
              <label for="fullname">Full Name</label>
            </div>

            <div className="form-floating mb-4">
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
              <label for="email">Password</label>
            </div>

            <Button variant="primary" onClick={signup}>
              Signup
            </Button>

            <span id="error-msg" className="text-danger"></span>
          </form>
        </Card.Body>
        <Card.Footer>
          <span>
            Already Have an Account? <a href="./login">Login</a>
          </span>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Signup;
