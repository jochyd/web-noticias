import React from 'react';
import { Row } from 'react-bootstrap';
import Noticia from './Noticia';

const ListaNoticias = ({noticiasFiltradas}) => {
    return (
        <Row>
            {
            noticiasFiltradas.map((noticias, position)=>{return <Noticia key={position} noticias={noticias}></Noticia>})
           }
        </Row>
    );
};

export default ListaNoticias;