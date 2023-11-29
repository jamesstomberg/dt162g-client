import Container from 'react-bootstrap/Container';

import Userfront, { LoginForm } from "@userfront/toolkit/react";

Userfront.init("8nwy5zrn");

function Login() {
  return (
    <>
      <Container>
        <h1>Logga in</h1>
        <LoginForm />
      </Container>
    </>
  )
}

export default Login;
