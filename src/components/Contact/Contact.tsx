import { ContactType, InputType } from "./types";
import IonIcon from "@reacticons/ionicons";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const validate = (input: InputType): InputType => {
  let error: InputType = {
    user_name: "",
    user_email: "",
    message: "",
  };

  if (!input.user_name) {
    error.user_name = `Nombre Obligatorio`;
  } else if (!/[A-Z]+$/i.test(input.user_name)) {
    error.user_name = "nombre solo puede contener letras";
  } else if (input.user_name.length >= 15) {
    error.user_name = "debe contener menos de 15 caracteres";
  }

  if (!input.user_email) {
    error.user_email = `Email Obligatorio`;
  } else if (!/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(input.user_email)) {
    error.user_email = "Formato de email incorrecto Ejemplo@dominio.com";
  }

  if (!input.message) {
    error.message = "Campo requerido";
  }

  return error;
};

function Contact() {
  const [error, setError] = useState<InputType>({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [input, setInput] = useState<InputType>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const contact: ContactType[] = [
    {
      icon: "logo-github",
      text: "GitHub",
      link: "https://github.com/faramir07",
    },
    {
      icon: "logo-linkedin",
      text: "Linkedin",
      link: "https://www.linkedin.com/in/miguel-linares-gamez",
    },
    {
      icon: "mail",
      text: "Malg20012002@gmail.com",
      link: "mailto:malg20012002@gmail.com",
    },
  ];

  console.log(error);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement & HTMLTextAreaElement
  > = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const alert = withReactContent(Swal);

    const target = e.target as typeof e.target & {
      user_name: { value: string };
      user_email: { value: string };
      message: { value: string };
    };

    if (
      (input.user_name = "") &&
      (input.user_email = "") &&
      (input.message = "")
    ) {
      alert.fire({
        icon: "error",
        title: <h2>Error!!</h2>,
        html: <p>Hay campos requeridos</p>,
        timer: 7000,
      });
    } else {
      emailjs
        .sendForm(
          "service_htr9d3m",
          "template_6jomwql",
          target,
          "_sBLAnjn5TWnr6qGm"
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert.fire({
              icon: "success",
              title: <h2>Mesaje enviado con EXITO!!</h2>,
              html: <p>Respondere lo mas pronto posible</p>,
              timer: 7000,
            });
          }
        })
        .catch((error) => {
          alert.fire({
            icon: "error",
            title: <h2>Upss algo salio mal!!</h2>,
            html: (
              <div>
                <span>Puedes con tactarme por </span>
                <a href={contact[1].link}>
                  <IonIcon name={contact[1].icon}></IonIcon>
                </a>
              </div>
            ),
          });
        });
    }
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contacta<span className="text-cyan-600">me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Ponerse en Contacto</p>
      </div>
      <div
        className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <form
          onSubmit={sendEmail}
          className="flex flex-col flex-1 gap-6"
          action=""
        >
          <input
            type="text"
            defaultValue=""
            name="user_name"
            placeholder="Tu Nombre"
            value=""
            onChange={handleChange}
            required
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          />
          {error.user_name ? (
            <span className="text-red-600">{error.user_name}</span>
          ) : null}
          <input
            type="email"
            defaultValue=""
            name="user_email"
            placeholder="Tu Correo"
            onChange={handleChange}
            required
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
          />
          {error.user_email ? (
            <span className="text-red-600">{error.user_email}</span>
          ) : null}
          <textarea
            placeholder="Tu Mensage"
            defaultValue=""
            name="message"
            rows={10}
            onChange={handleChange}
            required
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="5000"
          ></textarea>
          {error.message ? (
            <span className="text-red-600">{error.message}</span>
          ) : null}
          <button type="submit" className="btn-primary w-fit">
            Enviar Mensaje
          </button>
        </form>
        <div className="flex flex-col gap-7">
          {contact?.map((contact, i: number) => (
            <div key={i} className="flex gap-4 w-full items-center">
              <div
                className="min-w-[3.5rem] text-4xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full"
                data-aos="fade-up-left"
                data-aos-duration={`${i+1}000`}
              >
                <a href={contact.link} target="_blank">
                  <IonIcon name={contact.icon}></IonIcon>
                </a>
              </div>
              <p>{contact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
