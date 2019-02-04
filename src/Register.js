import React, { useState } from "react";
import { Button } from "reactstrap";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: ""
  });

  const [user, setUser] = useState(null);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm({ username: "", password: "", email: "" });
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <Button outline color="primary" size="sm" type="submit">
          Submit
        </Button>
      </form>
      {user && JSON.stringify(user, null, 4)}
    </>
  );
}
