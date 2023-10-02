import { Card, Button } from "react-bootstrap";
export const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="container d-flex flex-wrap gap-5 mt-5">
      {products.map((prod) => {
        //console.log(prod);
        return (
          <Card style={{ width: "22rem", height: "400px" }} key={prod.id}>
            <Card.Header style={{ height: "60%" }}>
              <Card.Img src={prod.thumbnail} className="h-100"></Card.Img>
            </Card.Header>

            <Card.Body>
              <Card.Title className="text-center">
                {prod.title.length > 15
                  ? prod.title.slice(0, 14) + "..."
                  : prod.title}
              </Card.Title>
              <Card.Text className="text-center">
                {prod.description.length > 35
                  ? prod.description.slice(0, 34) + "..."
                  : prod.description}
              </Card.Text>
            </Card.Body>

            <Card.Footer className="text-center">
              <Button variant="primary" className="me-2">
                View Details
              </Button>
              <Button variant="success" className="me-2">
                Edit
              </Button>
              <Button variant="danger" className="me-2">
                Delete
              </Button>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};
