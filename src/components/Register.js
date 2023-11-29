import Container from 'react-bootstrap/Container';

import Userfront, { SignupForm } from "@userfront/toolkit/react";

Userfront.init("8nwy5zrn");

function Register() {
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Registrera</h1>
        <SignupForm />
      </Container>
    </Container>
  )
}

export default Register;