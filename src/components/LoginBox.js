import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, Container, TextField } from '@material-ui/core';

function LoginBox() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Handle logging in.
  }

  return (
    <div>
      <Container maxWidth='xs' >
        <Card>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <TextField
                required
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </CardContent>

            <CardContent>
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </CardContent>

            <CardActions>
              <Button variant="contained" color="primary" type="submit">
                Continue
              </Button>
            </CardActions>
          </form>
        </Card>
      </Container>
    </div>
  );
}

export default LoginBox;
