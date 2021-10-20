import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import BloodTarget from '../../asset/images/bloodTarget.jpg';
import Blood from '../../asset/images/blood.jpg';
import Exclamation from '../../asset/images/exclamation.png';

import { db } from '../../util/firebase';
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from '../../context/auth';
import './personalBlood.styles.scss';

function PersonalBloodFlow(props) {

  const { user } = useContext(AuthContext); // can localStorage the steps (click from tracker will create a store > check it here)
  const [userData, setUserData] = useState(undefined);

  const history = useHistory(); 
  useEffect(() => {
    if (props.location.state === undefined) {
      history.push("/tracker") 
    } else {
      setUserData(props.location.state.userData)
    }
  }, []) 

  async function updateTracker(bloodLevel) {
    await updateDoc(doc(db, "trackers", localStorage.getItem("token")), {
      bloodLevel: bloodLevel,
      date: new Date()
    });
  };

  return (
    <Box py={6}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Box my={3}>
            <Typography variant="h4" className="logged-in-title">
              Hi, <strong>{ userData ? userData.displayName : "User" }</strong>
            </Typography>
          </Box>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <Typography variant="body1" color="text.secondary" style={{ fontWeight: "600" }}>
                Period Flow Tracker 
              </Typography>
              <img className="bloodTarget-logo" src={BloodTarget} alt="..." />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Box my={10}>
              <Grid container style={{ textAlign: 'center' }}>
                <Grid item xs={4}>
                  <Typography variant="h6">
                    Light
                  </Typography>
                  <Box mt={1}>
                    <IconButton component={Link} to={"/tracker"} style={{ backgroundColor: 'transparent' }} onClick={() => updateTracker("low")}>
                      <img className="blood-logo" src={Blood} alt="s" style={{ width: '30px' }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6">
                    Medium
                  </Typography>
                  <Box mt={1}>
                    <IconButton component={Link} to={"/tracker"} style={{ backgroundColor: 'transparent' }} onClick={() => updateTracker("medium")}>
                      <img className="blood-logo" src={Blood} alt="s" style={{ width: '60px' }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6">
                    Heavy
                  </Typography>
                  <Box mt={1}>
                    <IconButton component={Link} to={"/tracker"} style={{ backgroundColor: 'transparent' }} onClick={() => updateTracker("heavy")}>
                      <Box className="blood-logo">
                        <img src={Blood} alt="s" style={{ width: '60px' }} />
                        <img src={Blood} alt="s" style={{ width: '60px' }} />
                      </Box>
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={2} sx={{ border: "1px solid black", borderRadius: "10px" }}>
              <Stack direction="row" spacing={2}>
                <img className="exclamation-logo" src={Exclamation} alt="!" />
                <Typography variant="h5" className="word-color">
                  <strong> About Bleeding </strong>
                </Typography>
              </Stack>
              <Typography variant="body1">
                <p>
                  Your period is the shedding of the blood and tissue lining of the uterus that grew to support a potential pregnancy. 
                  Your period is also the first day of your menstrual cycle.  
                  The average period lasts <b>4-6 days</b> and comes regularly between 21 and 25 days apart. 
                </p>
                <Typography variant="h6">
                  <strong> Types of Bleeding </strong>
                </Typography>
                <p>
                  <strong>Heavy</strong> - The heaviest days of bleeding may occur during the beginning of your period.
                </p>
                <p>
                  <strong>Medium</strong> - A moderate amount of bleeding as your period begins to wane from its heaviest days.
                </p>
                <p>
                  <strong>Light</strong> - Light bleeding is most likely to appear at the start and end of your period.
                </p>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default PersonalBloodFlow;