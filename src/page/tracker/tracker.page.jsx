import React, { useState, useContext, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { db } from '../../util/firebase';
import { getDoc, doc } from "firebase/firestore";
import './tracker.styles.scss';
import { AuthContext } from '../../context/auth';
import TrackPeriod from '../../component/tracker/trackerPeriod.component';
import PersonalPeriodTracker from '../../component/tracker/personalPeriodTracker.component';

function Tracker() {

  const { user, token } = useContext(AuthContext);
  console.log(token)
  const [userData, setUserData] = useState(null);
  const [bloodLevel, setBloodLevel] = useState(null);
  const [mood, setMood] = useState(null);
  const [pain, setPain] = useState(null);
  
  // console.log(user)
  async function checkDB() {
    if (!user) { return null; }
    const docRef = doc(db, "users", localStorage.getItem("token"));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setUserData(docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such user!");
    }
  }

  async function checkTracker() {
    if (!user) { return null; }
    const docRef = doc(db, "trackers", localStorage.getItem("token"));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      // setTrackerData(docSnap.data())
      const data = docSnap.data();
      setBloodLevel(data.bloodLevel);
      setMood(data.mood);
      setPain(data.pain);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such tracker!");
    }
  }

  useEffect(() => {
    checkDB();
    checkTracker();
  }, [])

  const loggedInTracker = (
    <Box py={6}>
      <Container maxWidth="md">
        <Grid container >
          <PersonalPeriodTracker userData={userData} bloodLevel={bloodLevel} mood={mood} pain={pain} />
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