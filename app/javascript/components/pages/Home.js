import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import homePhoto from "../../../assets/images/home.png"
// import homePhoto from "../assets/images/home.avif"

const Home = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <img src={homePhoto} alt="entrance to treehouse"/>
      <Button color="info" onClick={toggle}>
        Proceed to See Available Apartments
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>Limited View</ModalHeader>
        <ModalBody>
          Thank you for visiting the Apartment App. Because you are not a registered user, your views are limited to an image with bedrooms and bathrooms. Please sign up and sign in if you want to see more details and/or contact the apartment manager.
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Continue as Unregistered User
          </Button>{' '}
          <Button color="primary" onClick={toggle}>
            Sign Up
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Log In
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Home
