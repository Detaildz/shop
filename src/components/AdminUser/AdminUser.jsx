import React, { useState } from 'react';
import { Form, Row, Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';

import { Spinner } from 'react-bootstrap';

import { cfg } from '../../cfg/cfg';

import './adminUser.scss';

function AdminUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { token, setToken } = useAuth();

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setValidated(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    setValidated(true);
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) return;

    try {
      setLoading(true);
      if (error) setError(false);
      const response = await fetch(`${cfg.API.HOST}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) throw new Error('Username or password is incorrect');
      const user = await response.json();

      setToken(user.token);

      handleClose();
    } catch (error) {
      console.log(error.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="user" onClick={handleShow}>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton onClick={handleClose}>
          <Offcanvas.Title style={{ fontSize: '2rem' }}>
            {token ? 'You are logged in' : 'Login'}
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
            <Button type="submit" disabled={loading} variant="primary">
              Login
              {loading && <Spinner animation="border" variant="primary" />}
            </Button>
          </Row>
        </Form>
      </Offcanvas>
    </>
  );
}

export default AdminUser;
