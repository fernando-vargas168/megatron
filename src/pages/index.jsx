import React from "react";
import Landing from "../components/Landing";
const index = () => {
  return (
    <div className="home">
      <Landing />
      <form
        hidden
        action="/"
        name="personas"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
      >
        <input type="hidden" name="form-name" value="personas" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="celular" name="email" />
      </form>
      <form
        hidden
        action="/"
        name="cursos"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
      >
        <input type="hidden" name="form-name" value="cursos" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="celular" name="email" />
      </form>
      <form
        hidden
        action="/"
        name="servicios"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
      >
        <input type="hidden" name="form-name" value="servicios" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="celular" name="email" />
      </form>
      <form
        hidden
        action="/"
        name="empresas"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
      >
        <input type="hidden" name="form-name" value="empresas" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="celular" name="email" />
      </form>
    </div>
  );
};

export default index;
