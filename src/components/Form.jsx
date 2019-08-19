import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField, Typography } from "@material-ui/core";
const Form = ({ value, name, formName = "contact", title }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    celular: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <F
      action="/"
      name={formName}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name={name} value={value} />
      {title && <Typography>{title}</Typography>}
      <TextField
        value={values.name}
        id="standard-name"
        name="name"
        label="Nombre"
        onChange={handleChange("name")}
        margin="normal"
        required
      />
      <TextField
        value={values.email}
        id="standard-email"
        label="Email"
        name="email"
        onChange={handleChange("email")}
        margin="normal"
        type="email"
        required
      />
      <TextField
        value={values.celular}
        name="celular"
        id="standard-celular"
        label="Celular"
        onChange={handleChange("celular")}
        margin="normal"
        required
      />
      <Button type="submit">Enviar</Button>
    </F>
  );
};
export default Form;
const F = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 25px !important;
`;
