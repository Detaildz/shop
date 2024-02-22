import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './user.scss';

function User() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/1'
        );
        if (!response.ok) throw new Error('Something went wrong');
        const data = await response.json();

        setUser(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      {' '}
      {loading && <Spinner animation="border" />}
      {!loading && user && (
        <>
          <div className="user" onClick={handleShow}>
            {user?.username[0]}
          </div>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{user.username}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p>
                <FontAwesomeIcon icon={faUser} />
                {user.name}
              </p>
              <p>
                <FontAwesomeIcon icon={faMobile} /> {user.phone}
              </p>
              <p>
                {' '}
                <FontAwesomeIcon icon={faEnvelope} /> {user.email}
              </p>

              <p>
                {' '}
                <FontAwesomeIcon icon={faGlobe} />{' '}
                <a href={user.website} blank>
                  {user.website}
                </a>
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}

export default User;
