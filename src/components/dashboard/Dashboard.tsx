import React from "react";
import { Card, CardContent, Typography, Box, Stack } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Stack direction="row" spacing={3} justifyContent="space-between">
        <Card style={{ backgroundColor: "#4caf50", color: "#fff", flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Ingresos Totales</Typography>
            <Typography variant="h4">$10,000</Typography>
          </CardContent>
        </Card>
        <Card style={{ backgroundColor: "#f44336", color: "#fff", flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Egresos Totales</Typography>
            <Typography variant="h4">$5,000</Typography>
          </CardContent>
        </Card>
        <Card style={{ backgroundColor: "#2196f3", color: "#fff", flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Saldo Actual</Typography>
            <Typography variant="h4">$5,000</Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default Dashboard;
