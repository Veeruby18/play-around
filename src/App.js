import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

function App() {
  const firstName = 'Kehinde'; // set your first name here
  const avatarUrl = 'https://via.placeholder.com/50';

  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-3 text-center">
        <h5>{firstName ? `Hello, ${firstName}!` : 'Hello, there!'}</h5>
        {firstName && <img src={avatarUrl} alt="Avatar" className="mt-2 rounded-circle" />}
      </div>
    </Container>
  );
}

export default App;
