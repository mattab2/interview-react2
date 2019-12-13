import React from "react";
import PropTypes from "prop-types";

import { Container } from "reactstrap";

const Wrapper = ({ children }) => {
  return <Container className="pt-5">{children}</Container>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
