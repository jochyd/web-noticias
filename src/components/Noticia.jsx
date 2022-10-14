import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const Noticia = ({noticias}) => {
    return (
        <Col>
           <Card className='w-100'>
        <Card.Img variant="top" src={noticias.image_url} />
        <Card.Body>
          <Card.Title className="text-center fw-lighter">{noticias.title}</Card.Title>
          <Card.Text>{noticias.description}</Card.Text>
          <hr></hr>
          <Button variant="primary" className="w-100">Ver noticia completa</Button>
        </Card.Body>
      </Card>
        </Col>
    );
};

export default Noticia;