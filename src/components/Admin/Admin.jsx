import React, { useState, useContext } from 'react';
import { cfg } from '../../cfg/cfg';
import useAuth from '../../hooks/useAuth';
import { AppContext } from '../../context/AppContext';
// src\components\Admin\Admin.jsx
import { Form, Row, Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import './admin.scss';

function Admin() {
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState('');
  const [start_production, setStart_production] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState({
    value: null, // 'success' | 'danger'
    message: '',
  });

  const { token } = useAuth();
  const { fetchData } = useContext(AppContext);
  const handleSubmit = async (event) => {
    setValidated(true);
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) return;

    try {
      setLoading(true);
      const data = {
        title,
        start_production: Number(start_production),
      };

      if (!image.trim()) data.image = image;

      const response = await fetch(`${cfg.API.HOST}/product/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const product = await response.json();

      if (!response.ok) {
        throw new Error(product.error);
      }

      setStatus({
        value: 'success',
        message: 'Product added successfully',
      });

      fetchData();
    } catch (error) {
      console.log('error', error.message);
      setStatus({
        value: 'danger',
        message: error.message || 'Failed to add product',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="main-container">
        <h1>Add product:</h1>
      </div>
      <div className="main-container formContainer">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Alert variant={status.value}>{status.message}</Alert>
          <Row className="mb-3">
            <Form.Group controlId="validationCustom01">
              <Form.Label>Car Brand</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Car Brand"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Car name is required
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="validationCustom02">
              <Form.Label>Start Production</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Start Production"
                value={start_production}
                onChange={(e) => setStart_production(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Year is required
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="validationCustom03">
              <Form.Label>Image url</Form.Label>
              <Form.Control
                type="text"
                placeholder="http://"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" disabled={loading}>
            Create
          </Button>{' '}
          {loading && <Spinner animation="border" variant="info" />}
        </Form>
      </div>
    </>
  );
}

export default Admin;
