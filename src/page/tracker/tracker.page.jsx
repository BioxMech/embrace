import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AuthContext } from '../../context/auth';
import TrackPeriod from '../../component/tracker/trackerPeriod.component';

function Tracker() {

  const { user } = useContext(AuthContext);

  const loggedInTracker = (
    <div>
      Logged
    </div>
  )

  const notLoggedInTracker = (
    <Box my={2} py={8} >
      <Container maxWidth="md" >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" gutterBottom style={{ color: "#9867C5" }}>
              Tracking Your Cycle
            </Typography>
            <Typography variant="body2" align="center" color="text.primary" >
              Thanks to modern technology, you can now know exactly when to throw extra pads in your schoolbag or handbag. 
              Simply key your info into our period cycle tracker to see when you might be feeling PMS, and when you can expect your period.  
              Now you can stay prepared - fuss free! 
            </Typography>
          </Grid> 
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <TrackPeriod />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )

  return user ? loggedInTracker : notLoggedInTracker
}

export default Tracker;