import React from "react";
import { Grid, Card, MetricsGrid, Embed } from "@morph-data/components";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h2>Dashboard</h2>
        <Grid cols="1" className="py-4">
          <Card>
            ## Metrics
            <MetricsGrid
              loadData="quiz_metrics"
              cols="2"
              value="value"
              label="label"
            />
          </Card>
        </Grid>

        <Grid cols="1" className="py-4">
          <Card>
            ### Chart
            <Embed loadData="metrics_learned_words" height={500} width={1000} />
          </Card>
        </Grid>

        <Grid cols="2" className="py-4">
          <Card>
            ### Result history
            <Embed
              loadData="metrics_quiz_results_by_day"
              height={500}
              width={500}
            />
          </Card>
          <Card>
            ### Today Results
            <Embed loadData="metrics_quiz_today_results" height={500} />
          </Card>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
