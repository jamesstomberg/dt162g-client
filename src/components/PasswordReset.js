import Container from 'react-bootstrap/Container';
import Userfront, { PasswordResetForm } from "@userfront/toolkit/react";

Userfront.init("8nwy5zrn");

function PasswordReset () {
  return (
    <>
      <Container>
        <h1>Återställ lösenord</h1>
        <PasswordResetForm />
      </Container>
    </>
  )
}

export default PasswordReset;
