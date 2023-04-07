import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";

export default function ApiFetch() {
  const [apiData, setData] = useState([]);

  const fetchData = async () => {
    debugger;
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="fs-2"> Product API</div>;
      <div className="mt-3 d-flex flex-wrap justify-content-around">
        {apiData.length == 0 ? (
          <div className="d-flex">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
          </div>
        ) : (
          apiData.map((product) => {
            return (
              <Card
                style={{ width: "18rem", height: "31rem", marginTop: "2rem" }}
              >
                <Card.Img
                  variant="top"
                  src={product?.image}
                  style={{ height: "10rem" }}
                />
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <Card.Text>
                    {product?.description.slice(0, 20) + "..."}
                  </Card.Text>
                  <Card.Text>
                    <b className="fs-5">{product?.category}</b>
                  </Card.Text>
                  <Card.Text>${product?.price}</Card.Text>

                  <Button variant="outline-primary">Buy Now</Button>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}
