import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [noticia, setNoticia] = useState([]);
  const [categorias, setCategorias] = useState ([]);
    
  useEffect(() => {
    consultarAPI();
  }, []);

  let consultarAPI = async () => {
      try{
        let respuesta = await fetch('https://newsdata.io/api/1/news?country=ar&apikey=pub_122296e4966d2de81e7b449960696484df6ad&country=ar&category=sports,business,food,politics');
        let dato = await respuesta.json();
        let listaNoticias = dato.results;
        let listaCategoria = [...new Set(listaNoticias.map((noticia)=>noticia.category))];
        console.log(listaCategoria);
        let categoria = [...listaCategoria];
        console.log(categoria);
        setNoticia(listaNoticias);

    }catch(error){
        console.log(error);
        //agregar cartelito  error
    }
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Buscar por categoria</Form.Label>
            <Form.Select>
              <option>Options</option>
              <option>Options</option>
              <option>Options</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </Form>
        <hr></hr>
        <ListaNoticias></ListaNoticias>
      </Container>
    </>
  );
};

export default Formulario;
