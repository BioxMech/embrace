import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Payment() {

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          xs=8
        </Grid>
        <Grid item xs={4}>
          xs=4
        </Grid>
        <Grid item xs={4}>
          xs=4
        </Grid>
        <Grid item xs={8}>
          xs=8
        </Grid>
      </Grid>
    </Box>
  )
}

export default Payment;