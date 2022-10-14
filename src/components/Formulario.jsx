import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [noticia, setNoticia] = useState([]);
  const [categorias, setCategorias] = useState ([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [noticiasFiltradas, setNoticiasFiltradas] = useState ([]);
  const [pais, setPais] = useState([]);
const [paisSeleccionado, setPaisSeleccionado] = useState('');
  let consultarAPI = async () => { 
      try{
          let respuesta = await fetch('https://newsdata.io/api/1/news?&apikey=pub_122296e4966d2de81e7b449960696484df6ad&country=ar,us,cl,br,es&category=sports,business,food,politics');
          let dato = await respuesta.json();
          let listaNoticias = dato.results;
          setNoticia(listaNoticias);
          let listaCategoria = [...new Set(listaNoticias.map((noticia)=>noticia.category[0]))];
          setCategorias(listaCategoria);
          let listaPaises = dato.results;
          let paisEncontrado = [...new Set(listaPaises.map((paises)=>paises.country[0]))];
            setPais(paisEncontrado)
        }catch(error){
            console.log(error);
            //agregar cartelito  error
        }
    };

   




    useEffect(() => {
      consultarAPI();
    }, []);
    
  
  let handleSubmit=(e)=>{
    e.preventDefault();
    let noticias = [...noticia.filter((noticia)=>noticia.category[0]=== categoriaSeleccionada && noticia.country[0] === paisSeleccionado)];

    setNoticiasFiltradas(noticias);
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Buscar por categoria</Form.Label>
            <Form.Select onChange={(e)=>setCategoriaSeleccionada(e.target.value)}>
              <option value=''>Elegir una Categoria</option>
           {
            categorias.map((categoria)=> <option key={categoria} value={categoria} >{categoria}</option>)
           }
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Buscar por categoria</Form.Label>
            <Form.Select onChange={(e)=>setPaisSeleccionado(e.target.value)}>
              <option value=''>Elegir un País</option>
           {
            pais.map((pais)=> <option key={pais} value={pais} >{pais}</option>)
           }
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </Form>
        <hr></hr>
        <ListaNoticias noticiasFiltradas={noticiasFiltradas}></ListaNoticias>
      </Container>
    </>
  );
};

export default Formulario;
