import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  Button,
} from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const response = axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      });
  };
  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center">
      {products.map((product) => {
        return (
          <Card style={{ width: "22rem", height: "400px" }}>
            <CardHeader className="h-50">
              <CardImg src={product.thumbnail} className="h-100"></CardImg>
            </CardHeader>
            <CardBody>
              <h3>
                {product.title.length > 15
                  ? product.title.slice(0, 14) + "..."
                  : product.title}
              </h3>
              <p>
                {product.description.length > 30
                  ? product.description.slice(0, 29) + "..."
                  : product.description}
              </p>
            </CardBody>
            <CardFooter>
              <Button className="me-2" variant="primary">
                View
              </Button>
              <Button className="me-2" variant="success">
                Edit
              </Button>
              <Button className="me-2" variant="danger">
                Delete
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
