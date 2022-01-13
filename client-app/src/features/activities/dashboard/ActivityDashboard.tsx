import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";

import ActivityList from "./ActivityList";

const ActivityDashboard = observer(() => {
  const { activityStore } = useStore();
  const { loadActivities, loadingInitial, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities, activityRegistry.size]);

  if (loadingInitial) return <LoadingComponents content="Loading App" />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <ActivityFilters />
      </Grid.Column>
    </Grid>
  );
});

export default ActivityDashboard;
