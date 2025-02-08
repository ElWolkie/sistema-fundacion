import React from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";

const Contabilidad: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Contabilidad
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Balance General</Typography>
              <Typography variant="h4">$5,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Ingresos Mensuales</Typography>
              <Typography variant="h4">$10,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Egresos Mensuales</Typography>
              <Typography variant="h4">$5,000</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contabilidad;
