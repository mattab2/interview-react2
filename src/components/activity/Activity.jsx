import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "reactstrap";

import StartStop from "./StartStop";

const Activity = ({ startActivity, stopActivity, active }) => {
  return (
    <Row className="mb-4">
      <Col className="py-2">
        <h2>Welcome</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          sagittis dui, sit amet rutrum erat. Quisque eleifend, tellus a
          ullamcorper molestie, nibh neque hendrerit dolor, ac rhoncus ex felis
          nec diam.
        </p>
      </Col>
      <Col>
        <StartStop
          startActivity={startActivity}
          stopActivity={stopActivity}
          active={active}
        />
      </Col>
    </Row>
  );
};

Activity.propTypes = {
  active: PropTypes.object,
  startActivity: PropTypes.func.isRequired,
  stopActivity: PropTypes.func.isRequired
};

export default Activity;
