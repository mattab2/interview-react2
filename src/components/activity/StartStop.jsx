import React from 'react';
import PropTypes from "prop-types";

import {
  Card,
  CardBody,
} from 'reactstrap';

import StartForm from "./StartForm";
import StopForm from "./StopForm";

const StartStop = ({startActivity, stopActivity, active}) => {
  return (
    <Card className="rounded shadow-sm overflow-hidden">
      <CardBody>
        {!active &&
        <StartForm
          startActivity={startActivity}
        />
        }
        {!!(active) &&
        <StopForm
          active={active}
          stopActivity={stopActivity}
        />
        }

      </CardBody>
    </Card>
  );
};

StartStop.propTypes = {
  active: PropTypes.object,
  startActivity: PropTypes.func.isRequired,
  stopActivity: PropTypes.func.isRequired,
};

export default StartStop;
