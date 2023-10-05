import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "react-bootstrap";
import axios from "axios";

const Student = () => {
  const [id, setId] = useState(0);

  //Every page change or state change ma yo render huncha
  useEffect(() => {
    console.log("Counter Component every state changed");
  });

  //first page load huda matra yo render huncha
  //   useEffect(() => {
  //     console.log("Counter Component Page FirstLoad");
  //   }, []);

  //Dependency, bracket ma bhako kura chalesi matra useffect ko kura render huncha
  //   useEffect(() => {
  //     console.log("Counter Component Page FirstLoad");
  //   }, [count]);

  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  const toggleQuotes = async (e) => {
    e.preventDefault();

    const { data } = await axios.get("https://dummyjson.com/quotes");
    //console.log(data);
    const { quotes } = data;
    console.log(quotes);

    const qts = quotes.find((quote) => quote.id === id);
    console.log(qts);

    setId(id + 1);

    setAuthor(qts.author);
    setQuote(qts.quote);
  };
  return (
    <Card>
      <CardHeader>
        <h3>QuoteDisplay</h3>
      </CardHeader>
      <CardBody>
        <h4>Author: {author}</h4>
        <i className="">Quote: {quote}</i>
      </CardBody>
      <CardFooter>
        <Button variant="success" className="me-2" onClick={toggleQuotes}>
          Toggle
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Student;
