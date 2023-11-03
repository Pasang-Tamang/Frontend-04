import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "react-bootstrap";
import { useState } from "react";
const Counter = () => {
  const arr = [
    {
      name: "pa",
      age: 21,
    },
    {
      name: "rh",
      place: "sjdfo",
    },
  ];
  console.log(...arr);

  let [count, setCount] = useState(0);

  //let count = 0;

  const increment = (e) => {
    e.preventDefault();
    console.log("clcikced");
    setCount((count = count + 1));
    //console.log(count);
  };

  const decrement = (e) => {
    console.log("clicked");
    setCount((count -= 1));
  };

  const reset = (e) => {
    setCount(0);
  };
  return (
    <Card>
      <CardHeader>
        <h3>Counter</h3>
      </CardHeader>
      <CardBody>
        <p>{count}</p>
      </CardBody>
      <CardFooter>
        <Button variant="success" className="me-2" onClick={increment}>
          Increment
        </Button>
        <Button variant="primary" className="me-2" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="danger" onClick={reset}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Counter;
