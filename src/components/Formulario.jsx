import { Container, Form, Button } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {

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
