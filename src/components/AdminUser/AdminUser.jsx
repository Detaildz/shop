import React, { useState } from 'react';
import { Form, Row, Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './adminUser.scss';

function AdminUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setValidated(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  function handleSubmit(event) {
    setValidated(true);
    event.preventDefault();
    console.log('Trying to log in');
  }

  return (
    <>
      <div className="user" onClick={handleShow}>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton onClick={handleClose}>
          <Offcanvas.Title style={{ fontSize: '2rem' }}>
            Log in:
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Username is required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Password is required
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Row>
        </Form>
      </Offcanvas>
    </>
  );
}

export default AdminUser;
