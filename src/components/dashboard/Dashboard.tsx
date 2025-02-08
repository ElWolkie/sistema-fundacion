import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: "#4caf50", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">Ingresos Totales</Typography>
              <Typography variant="h4">$10,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: "#f44336", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">Egresos Totales</Typography>
              <Typography variant="h4">$5,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: "#2196f3", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">Saldo Actual</Typography>
              <Typography variant="h4">$5,000</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
