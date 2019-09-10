import React from "react";
import { Card } from "semantic-ui-react";
import { Formik } from "formik";
import axios from "axios";

import SellForm from "./SellForm";

function Sell({ car, handleSoldCar }) {
  return (
    <>
      <Card color={"red"}>
        <Card.Content>
          <Card.Header>
            {car.make} {car.model}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Formik
            initialValues={{ customer: "", amount: "" }}
            onSubmit={(values, actions) => {
              values.car_id = car.id;

              axios
                .post("/api/sales", values)
                .then(response => {
                  handleSoldCar(response.data.sold);
                  actions.resetForm();
                })
                .catch(errors => {
                  console.log(errors);
                });
            }}
            render={props => <SellForm {...props} />}
          />
        </Card.Content>
      </Card>
    </>
  );
}

export default Sell;
