import React from "react";
import PropTypes from "prop-types";

import { Card, CardBody, CardHeader } from "reactstrap";

import ActivityTable from "./ActivityTable";
import Empty from "./Empty";

/**
 * @param activities
 * @return {*}
 * @constructor
 */
const List = ({ activities }) => {
  return (
    <Card className="rounded shadow-sm overflow-hidden">
      <CardHeader>Activity List</CardHeader>
      <CardBody>
        {!!activities.length && <ActivityTable activities={activities} />}
        {!activities.length && <Empty />}
      </CardBody>
    </Card>
  );
};

List.propTypes = {
  activities: PropTypes.array.isRequired
};

export default List;
