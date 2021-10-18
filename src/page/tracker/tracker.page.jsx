import React, { useState, useContext } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { AuthContext } from '../../context/auth';
import TrackPeriod from '../../component/tracker/trackerPeriod.component';
// import { userData } from '../../util/common';

function Tracker() {

  const { user } = useContext(AuthContext);
  const [userData] = useState(null);

  const loggedInTracker = (
    <Box py={6}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box my={3}>
              <Typography variant="h4">
                Hi <strong style={{ color: "#9867C5" }}>Priyanka</strong> { console.log(userData)}
              </Typography>
            </Box>
            <Box my={3}>
              <Typography variant="body1">
                Today - Day XX of your cycle
              </Typography>
            </Box>
            <Box my={3}>
              <Typography variant="subtitle2" color="text.secondary">
                Next period in <strong style={{ color: '#E26058' }}>0 days</strong>
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Chance of pregnancy: <strong style={{ color: "#2BA3BD" }}>n/a</strong>
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Ovulation in: <strong style={{ color: '#9867C5' }}>0 days</strong>
              </Typography>
            </Box>
            <Box my={3}>
              <Typography variant="h6">
                How do you feel today? <ControlPointIcon /> <InsertEmoticonIcon />
              </Typography>
            </Box>
            <Box my={3}>
              <Typography variant="h6">
                Set Reminder For Period
              </Typography>
              <Button variant="filled" style={{ backgroundColor: "#FA4C86", color: "white" }} endIcon={<ArrowForwardIosIcon />} >Set Reminder Now</Button>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Box>
              <Box>
                <Typography variant="body1">day</Typography>
                <Typography variant="h5">0</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )

  const notLoggedInTracker = (
    <Box py={6} >
      <Container maxWidth="md" >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Box my={3} >
              <Typography variant="h3" align="center" gutterBottom style={{ color: "#9867C5" }}>
                Tracking Your Cycle
              </Typography>
              <Typography variant="body2" align="center" color="text.primary" >
                Thanks to modern technology, you can now know exactly when to throw extra pads in your schoolbag or handbag. 
                Simply key your info into our period cycle tracker to see when you might be feeling PMS, and when you can expect your period.  
                Now you can stay prepared - fuss free! 
              </Typography>
            </Box>
          </Grid> 
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <TrackPeriod />
      </Container>
    </Box>
  )

  return user ? loggedInTracker : notLoggedInTracker
}

export default Tracker;