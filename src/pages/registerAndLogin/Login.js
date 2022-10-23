import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../../contexts/UserContext';
import "./registerAndLogin.css";

const Login = () => {
  const { logIn } = useContext(authContext)
  const handleLogin = (e)=>{
    e.preventDefault();
    // const userName = e.target.name.value;
    // const URL = e.target.url.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    logIn(Email, Password)
    .then(res =>console.log(res.user))
    .catch(e =>console.log(e.message))
  }
  return (
    <section id="form">
      <div className="registerBanner"></div>
      <div className="Form">
        <Form onSubmit={handleLogin}>
          <h1>Login please</h1>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      
    </section>
  )
}

export default Login