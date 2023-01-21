import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AveargeTotals from "../components/sales/AveargeTotals";
import BarChart from "../components/sales/charts/BarChart";
import LineChart from "../components/sales/charts/LineChart";
import SalesReportChart from "../components/sales/charts/SalesReportChart";
import {
  salesLineChartData,
  salesLineChartOptions,
  salesReportPieChartData,
  salesReportPieChartOptions,
} from "../data/chartData";

const SalesAnalytics = () => {
  const ComponentWrapper = styled(Box)({
    marginTop: "10px",
    paddingBottom: "10px",
  });

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Sales Analytics
      </Typography>
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <LineChart
              chartOptions={salesLineChartOptions}
              chartData={salesLineChartData}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                boxShadow: "none !important",
                borderRadius: "12px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                height: "100%",
              }}
            >
              <BarChart />
            </Paper>
          </Grid>
        </Grid>
      </ComponentWrapper>

      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <AveargeTotals />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                boxShadow: "none !important",
                borderRadius: "12px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                height: "100%",
                p: "10px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Sales Report
              </Typography>
              <SalesReportChart
                chartOptions={salesReportPieChartOptions}
                chartData={salesReportPieChartData}
              />
            </Paper>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </Box>
  );
};

export default SalesAnalytics;
