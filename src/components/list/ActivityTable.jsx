import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";

/**
 *
 * @param timestamp
 * @return {string}
 * @constructor
 */
const ShowDate = ({ timestamp }) => {
  if (!timestamp) {
    return "---";
  }

  const d = new Date(timestamp);
  return d.toLocaleDateString("en-US") + " " + d.toLocaleTimeString("en-US");
};

ShowDate.propTypes = {
  timestamp: PropTypes.number
};

/**
 *
 * @param start
 * @param stop
 * @return {string}
 * @constructor
 */
const ShowDuration = ({ start, stop }) => {
  if (!start) {
    return "---";
  }

  let stopTimestamp = stop;
  if (!stopTimestamp) {
    stopTimestamp = Date.now();
  }

  let diff = (stopTimestamp - start) / 1000;
  let minutes = Math.floor(diff / 60);
  let seconds = diff - minutes * 60;

  return (
    <React.Fragment>
      {!!minutes && `${minutes} Minutes`}
      {!!seconds && ` ${Math.round(seconds)} Seconds`}
      {!stop && ` (In Progress)`}
    </React.Fragment>
  );
};

ShowDuration.propTypes = {
  start: PropTypes.number,
  stop: PropTypes.number
};

/**
 *
 * @param activity
 * @return {*}
 * @constructor
 */
const ActivityTableRow = ({ activity }) => {
  return (
    <tr>
      <td>
        <ShowDate timestamp={activity.start} />
      </td>
      <td>
        <ShowDate timestamp={activity.stop} />
      </td>
      <td>
        <ShowDuration start={activity.start} stop={activity.stop} />
      </td>
      <td>{activity.name}</td>
    </tr>
  );
};

ActivityTableRow.propTypes = {
  activity: PropTypes.object.isRequired
};

/**
 * @param activities
 * @return {*}
 * @constructor
 */
const ActivityTable = ({ activities }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Started At</th>
          <th>Completed At</th>
          <th>Duration</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, index) => {
          return <ActivityTableRow key={index} activity={activity} />;
        })}
      </tbody>
    </Table>
  );
};

ActivityTable.propTypes = {
  activities: PropTypes.array.isRequired
};

export default ActivityTable;
