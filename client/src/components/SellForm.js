import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const SellForm = ({ values, handleChange, handleSubmit }) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name={"customer"}
          value={values.customer}
          onChange={handleChange}
          placeholder={"Customer Name"}
          type={"text"}
        />
        <Form.Input
          name={"amount"}
          value={values.amount}
          onChange={handleChange}
          placeholder={"Selling For"}
          type={"number"}
        />
        <Form.Button type={"submit"} content={"Submit"} color={"red"} />
      </Form>
    </>
  );
};

export default SellForm;
