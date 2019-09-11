import React from "react";

const FormNetlify = () => {
  return (
    <div>
      <form
        hidden
        action="/"
        name="personas"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify="true "
      >
        <input type="hidden" name="form-name" value="personas" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="celular" name="mobile" />
        <input type="text" name="persona" />
      </form>
      <form
        hidden
        action="/"
        name="capacitacion"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify="true "
      >
        <input type="hidden" name="form-name" value="capacitacion" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="mobile" />
        <input type="text" name="curso" />
      </form>
      <form
        hidden
        action="/"
        name="servicios"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify="true "
      >
        <input type="hidden" name="form-name" value="servicios" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="celular" name="mobile" />
        <input type="text" name="servicio" />
      </form>
      <form
        hidden
        action="/"
        name="empresas"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify="true "
      >
        <input type="hidden" name="form-name" value="empresas" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="celular" name="mobile" />
        <input type="text" name="empresa" />
      </form>
      <form
        hidden
        action="/"
        name="buscoEmpleo"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify="true "
      >
        <input type="hidden" name="form-name" value="buscoEmpleo" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="celular" name="mobile" />
      </form>
      <form
        hidden
        action="/"
        name="convocatoria"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify="true "
      >
        <input type="hidden" name="form-name" value="convocatoria" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="celular" name="mobile" />
      </form>
    </div>
  );
};

export default FormNetlify;
