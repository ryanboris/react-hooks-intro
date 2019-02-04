import React, { useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

// * Styles - Components
const FormContainer = styled.div`
  text-align: center;
`;
const Form = styled.form`
  display: grid;
  align-items: center;
  justify-content: center;
  button {
    width: 100px;
    justify-self: center;
    margin: 30px 0;
  }
`;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      username,
      password
    };
    setUser(userData);
    setUsername("");
    setPassword("");
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <Button outline color="primary" size="sm" type="submit">
          Submit
        </Button>
      </Form>
      {user && <div>{JSON.stringify(user, null, 4)}</div>}
    </FormContainer>
  );
}
