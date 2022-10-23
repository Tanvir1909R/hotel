import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { authContext } from "../../contexts/UserContext";
import { FcGoogle } from "react-icons/fc";
import "./registerAndLogin.css";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { googleRegister, createUser } = useContext(authContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleRegister = () => {
    googleRegister(googleProvider)
      .then((res) => console.log(res.user))
      .catch((e) => console.log(e.message));
  };
  const handleRegister = (e)=>{
    e.preventDefault();
    // const userName = e.target.name.value;
    // const URL = e.target.url.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    createUser(Email, Password)
    .then(res =>console.log(res.user))
    .catch(e =>console.log(e.message))
  }
  return (
    <section id="form">
      <div className="registerBanner"></div>
      <div className="Form">
        <h1>Register now!!</h1>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              // required
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Profile url</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter url"
              name="url"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Terms and condition" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="or">
          <div className="google mt-4" onClick={handleGoogleRegister}>
            <p className="mb-0 me-2">Register with google</p>
            <FcGoogle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
