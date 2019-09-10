import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Container,
  Header,
  Grid,
  Label
} from "semantic-ui-react";
import Sell from "./Sell";

function Dashboard(props) {
  const [cars, setCars] = useState([]);
  const [selling, setSelling] = useState(null);

  const sellingCar = car => {
    setSelling(car);
  };
  useEffect(() => {
    axios
      .get("/api/cars")
      .then(cars => setCars(cars.data.cars))
      .catch(errors => {
        console.log(errors);
      });
  });

  const handleSoldCar = sale => {
    const updatedCars = cars.map(car => {
      if (car.id === sale.id) {
        car.title_status = "sold";
      }
      return car;
    });

    setCars(updatedCars);
    setSelling(null);
  };

  return (
    <>
      <Container>
        <Grid padded={"vertically"}>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header>Inventory</Header>
              <Card.Group itemsPerRow={2}>
                {cars.length > 0 &&
                  cars.map(car => (
                    <Card key={car.id} color={"blue"}>
                      <Card.Content>
                        <Grid columns={2}>
                          <Grid.Row verticalAlign={"middle"}>
                            <Grid.Column>
                              <Card.Header as={"h3"}>{car.model}</Card.Header>
                              <Card.Meta>{car.make}</Card.Meta>
                            </Grid.Column>
                            <Grid.Column textAlign={"right"}>
                              <Label
                                color={
                                  car.title_status === "sold" ? "green" : "grey"
                                }
                              >
                                {car.title_status}
                              </Label>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Card.Content>
                      <Card.Content>
                        <Card.Description>
                          <p>
                            Mileage: <span>{car.mileage}</span>
                          </p>
                          <p>
                            Transmission Type:{" "}
                            <span>{car.transmission_type}</span>
                          </p>
                        </Card.Description>
                      </Card.Content>
                      <Card.Content>
                        {car.title_status !== "sold" && (
                          <Button
                            color={"blue"}
                            onClick={() => sellingCar(car)}
                          >
                            Sell
                          </Button>
                        )}
                      </Card.Content>
                    </Card>
                  ))}
              </Card.Group>
            </Grid.Column>
            <Grid.Column>
              {selling && (
                <>
                  <Header content={"Selling"} />
                  <Sell car={selling} handleSoldCar={handleSoldCar} />
                </>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
