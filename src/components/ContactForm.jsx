import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  const [formValue, setFormValue] = useState({
    user: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    user: false,
    email: false,
    message: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormValue({ ...formValue, [name]: value });

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (ev) => {
    const { name, value } = ev.target;
    setTouched({ ...touched, [name]: true });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = "";

    if (name === "user" && !value.match(/^[A-Za-z\s]+$/)) {
      errorMessage = "Por favor ingrese solo letras y espacios";
    } else if (
      name === "email" &&
      !value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
    ) {
      errorMessage = "Por favor ingrese un correo electrónico válido";
    } else if (name === "message" && value.length < 5) {
      errorMessage = "El mensaje debe tener al menos 5 caracteres";
    }

    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setTouched({
      user: true,
      email: true,
      message: true,
    });

    try {
      const response = await fetch("http://localhost:2020/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormValue({ user: "", email: "", message: "" });
        setTimeout(() => {
          setSubmitted(false);
        }, 2000);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <br />
        <Form.Control
          type="text"
          name="user"
          value={formValue.user}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Nombre"
          required
        />
        {touched.user && errors.user && (
          <Form.Text className="text-danger">{errors.user}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <br />
        <Form.Control
          type="email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="E-mail"
          required
        />
        {touched.email && errors.email && (
          <Form.Text className="text-danger">{errors.email}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <br />
        <Form.Control
          as="textarea"
          type="text"
          name="message"
          value={formValue.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={3}
          placeholder="Mensaje"
          required
        />
        {touched.message && errors.message && (
          <Form.Text className="text-danger">{errors.message}</Form.Text>
        )}
      </Form.Group>
      <br />
      <Button type="submit">Enviar</Button>
      {submitted && <p>¡Formulario enviado!</p>}
    </Form>
  );
};

export default ContactForm;
