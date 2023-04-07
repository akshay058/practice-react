import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";

export default function ApiFetch() {
  const [apiData, setData] = useState([]);
  const [filter, setFilter] = useState("products");

  const fetchData = async () => {
    // debugger;
    const res = await fetch(`https://dummyjson.com/${filter}`);
    const data = await res.json();
    setData(filter === "products" ? data.products : data.users);
    console.log(data);
  };
  useEffect(() => {
    setData([]);
    fetchData();
  }, [filter]);
  return (
    <div>
      <div className="d-flex justify-content-center my-5">
        <Button variant="secondary me-5" onClick={() => setFilter("products")}>
          {" "}
          Products
        </Button>
        <Button variant="warning" onClick={() => setFilter("users")}>
          {" "}
          Users
        </Button>
      </div>
      <div className="fs-2"> Product API</div>;
      <div className="mt-3 d-flex flex-wrap justify-content-around">
        {apiData.length === 0 ? (
          <div className="d-flex">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
          </div>
        ) : (
          apiData.map((elem, index) => {
            return (
              <div className="my-3" key={index}>
                <Card
                  style={{ width: "18rem", height: "31rem", marginTop: "2rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={elem?.thumbnail ?? elem?.image}
                    style={{ height: "10rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{elem?.title ?? elem.firstName}</Card.Title>
                    <Card.Text>
                      {(elem?.description && elem?.description.slice(0, 20)) ??
                        elem?.address.address + "..."}
                    </Card.Text>
                    <Card.Text>
                      <b className="fs-5">{elem?.category ?? elem?.age}</b>
                    </Card.Text>
                    <Card.Text>${elem?.price ?? elem.email}</Card.Text>

                    <Button variant="outline-primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
