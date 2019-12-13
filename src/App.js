import React, { useEffect, useState } from "react";
import "./styles/app.scss";

import Header from "./components/global/Header";
import Wrapper from "./components/global/Wrapper";
import Activity from "./components/activity/Activity";
import List from "./components/list/List";
import { ActivityListGet, ActivityListSet } from "./store";

/**
 *
 * @return {[ActivityListGet|*[], (value: (((prevState: (ActivityListGet|*[])) => (ActivityListGet|*[])) | ActivityListGet | *[])) => void]}
 */
const useActivityList = () => {
  const [value, setValue] = useState(ActivityListGet || []);

  useEffect(() => {
    ActivityListSet(value);
  }, [value]);

  return [value, setValue];
};

/**
 * Only one active activity at a time, and that one is always going to be in at the start of the array.
 * @param activityList
 * @return {null|*}
 */
const findActive = activityList => {
  if (!activityList || !activityList.length) {
    return null;
  }

  if (activityList[0]["stop"]) {
    return null;
  }

  return activityList[0];
};

const App = () => {
  const [activityList, setActivityList] = useActivityList();

  const startActivity = activity => {
    setActivityList([activity, ...activityList]);
  };

  const stopActivity = data => {
    let activity = findActive(activityList);
    if (!activity) {
      return false;
    }

    activity = {
      ...activity,
      ...data
    };

    let updatedList = [...activityList];

    updatedList[0] = activity;

    setActivityList(updatedList);
  };

  const active = findActive(activityList);

  return (
    <div className="app">
      <Header />
      <Wrapper>
        <Activity
          active={active}
          startActivity={startActivity}
          stopActivity={stopActivity}
        />
        <List activities={activityList} />
      </Wrapper>
    </div>
  );
};

export default App;
