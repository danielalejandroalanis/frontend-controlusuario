import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import axios from "axios";
import "../sass/CreateUser.scss";
import fireSwal from "../components/SwalComponent";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  //Set the page title
  useEffect(() => {
    document.title = "Crear usuario";
  });
  let navigate = useNavigate();

  //Handle react-hook-form events
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const redirectToHome = () => {
    navigate("/");
  };
  //Submit data with handle errors. Using sweetalert2
  const onSubmit = (data) => {
    axios
      .post("/users/create", data)
      .then((res) => {
        fireSwal(
          "Usuario creado",
          `Se ha creado el usuario con ID: ${res.data}`,
          "success",
          "",
          redirectToHome,
          false
        );
      })
      .catch((error) => {
        if (error.response.status >= 500 && error.response.status <= 600) {
          fireSwal(
            "Error de servidor",
            `Hay un problema con el servidor. Contacte a soporte técnico.`,
            "error",
            "",
            null,
            false
          );
        }
      });
  };
  return (
    <Container>
      <h1 aria-label="Página para crear nuevo usuario">Crear nuevo usuario</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              aria-label="Ingrese primer nombre"
              {...register("first_name", { required: true })}
            />
            {errors.first_name && (
              <span className="span-form-error">
                El primer nombre es requerido
              </span>
            )}
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              aria-label="Ingrese apellido"
              {...register("last_name", { required: true })}
            />
            {errors.last_name && (
              <span className="span-form-error">El apellido es requerido</span>
            )}
          </Col>
        </Row>
        <Row
          style={{
            marginTop: 20,
          }}
        >
          <Col>
            <input
              type="mail"
              className="form-control"
              placeholder="Email"
              aria-label="Ingrese dirección de mail"
              {...register("email_address", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.email_address && (
              <span className="span-form-error">
                Debe ingresar una dirección de mail válida
              </span>
            )}
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Tipo"
              aria-label="Ingrese el tipo de usuario"
              {...register("type", { required: true })}
            />{" "}
            {errors.type && (
              <span className="span-form-error">
                El tipo de usuario es requerido
              </span>
            )}
          </Col>
        </Row>
        <Row
          style={{
            marginTop: 20,
          }}
        >
          <Col>
            <Button
              aria-label="Botón para confirmar cambios"
              variant="contained"
              style={{ borderRadius: 5, backgroundColor: "#ff9e0c" }}
              type="sumbit"
            >
              Crear Usuario
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default CreateUser;
