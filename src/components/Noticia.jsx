import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const Noticia = () => {
    return (
        <Col>
           <Card className='w-100'>
        <Card.Img variant="top" src={'aqui va el source'} />
        <Card.Body>
          <Card.Title className="text-center fw-lighter">Titulo noticia</Card.Title>
          <Card.Text>
       texto noticia
          </Card.Text>
          <hr></hr>
          <Button variant="primary" className="w-100">Ver noticia completa</Button>
        </Card.Body>
      </Card>
        </Col>
    );
};

export default Noticia;