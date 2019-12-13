import React, { useState } from 'react';
import PropTypes from "prop-types";

import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const StartForm = ({startActivity}) => {
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!value) {
      setError("Please provide an activity name.");
      return false;
    }

    startActivity({
      name: value,
      start: Date.now(),
      stop: null,
    });

    setError(null);
    setValue('');
  };

  return (
    <Form onSubmit={onSubmit}>
      {!!(error) && (
        <Alert color="danger">
          {error}
        </Alert>
      )}
      <FormGroup>
        <Label for="activity">Activity</Label>
        <Input
          type="text"
          name="activity"
          id="activity"
          placeholder="Activity Name"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </FormGroup>
      <Button type="submit" color="primary">Start</Button>
    </Form>
  );
};

StartForm.propTypes = {
  startActivity: PropTypes.func.isRequired,
};

export default StartForm;