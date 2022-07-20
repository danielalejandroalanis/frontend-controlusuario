import React, { useEffect, useState } from "react";
import { Container, Alert, Row, Col } from "react-bootstrap";
import "../sass/TableComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "../components/ModalComponent";
import Button from "@mui/material/Button";

//redux
import { fetchAllUsers } from "../store/slices/Users";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../components/TableComponent";

const Home = () => {
  //Set the page title
  useEffect(() => {
    document.title = "Home";
  });
  const [userInput, setUserInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [dataForModal, setDataForModal] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  //Getting data from redux
  const data = useSelector((state) => state.users.list);

  const handleInput = (e) => {
    const toLower = e.target.value.toLowerCase();
    setUserInput(toLower);
  };

  //Filter by name
  const filterUsers = data.filter((el) => {
    if (userInput === "") {
      return el;
    } else {
      return el.first_name.toLowerCase().includes(userInput);
    }
  });

  //Handle button info click
  const handleInfoClick = (e) => {
    setShowModal(true);
    setDataForModal(
      data.filter((user) => {
        return user._id === e.currentTarget.id;
      })
    );
  };

  //Setting the Headers of the Table
  const headersColumns = [
    {
      "id": "1",
      "columnName": "Nombre",
    },
    {
      "id": "2",
      "columnName": "Apellido",
    },
    {
      "id": "3",
      "columnName": "Email",
    },
    {
      "id": "4",
      "columnName": "Tipo",
    },
    {
      "id": "5",
      "columnName": "Acción",
    },
  ];

  return (
    <>
      {data.length === 0 ? (
        <Container>
          <Alert variant="success" style={{ marginTop: 50 }}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              size="1x"
              style={{ paddingRight: 10 }}
            />
            No hay información de usuarios para mostrar
          </Alert>
        </Container>
      ) : (
        <Container>
          <h1 aria-label="Pagina con la lista de usuarios">
            Lista de usuarios
          </h1>
          <hr />
          <span>Buscar por Nombre:</span>
          <input
            type="text"
            onChange={handleInput}
            className="form-control"
            aria-label="Buscar por nombre"
            style={{ width: "400px" }}
          />
          <TableComponent
            className="styled-table"
            tHeader={headersColumns}
            tBody={filterUsers.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email_address}</td>
                  <td>{user.type}</td>
                  <td>
                    <Button
                      aria-label="Botón para abrir modal de más información"
                      id={user._id}
                      onClick={handleInfoClick}
                    >
                      <FontAwesomeIcon
                        style={{ color: "#ff9e0c" }}
                        icon={faCircleInfo}
                        className="fa-lg"
                      />
                    </Button>
                  </td>
                </tr>
              );
            })}
          />
          <ModalComponent
            state={showModal}
            setState={setShowModal}
            title="Información de usuario"
            body={dataForModal.map((user, index) => {
              return (
                <Container key={index}>
                  <Row>
                    <Col>
                      <strong>ID:</strong> {user._id}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <strong>Nombre:</strong> {user.first_name}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <strong>Apellido:</strong> {user.last_name}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <strong>Email:</strong> {user.email_address}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <strong>Tipo:</strong> {user.type}
                    </Col>
                  </Row>
                </Container>
              );
            })}
          />
        </Container>
      )}
    </>
  );
};

export default Home;
