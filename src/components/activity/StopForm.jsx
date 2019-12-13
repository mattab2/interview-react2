import React from "react";
import PropTypes from "prop-types";

import { Button, Form } from "reactstrap";

const StopForm = ({ active, stopActivity }) => {
  const onSubmit = event => {
    event.preventDefault();

    stopActivity({
      stop: Date.now()
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <p>
        You are currently working on: <strong>{active.name}</strong>
      </p>
      <Button type="submit" color="primary">
        Stop Activity
      </Button>
    </Form>
  );
};

StopForm.propTypes = {
  active: PropTypes.object.isRequired,
  stopActivity: PropTypes.func.isRequired
};

export default StopForm;
