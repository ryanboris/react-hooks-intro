import React, { useState } from "react";
import { Button } from "reactstrap";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  return (
    <>
      <h2>Register</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={e => e.target.value}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => e.target.value}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={e => e.target.value}
        />
        <Button outline color="primary" size="sm" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
