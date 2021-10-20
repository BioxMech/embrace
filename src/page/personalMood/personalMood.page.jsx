import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Divider from '@mui/material/Divider';
import MuiAlert from '@mui/material/Alert';

import SmileTitle from '../../asset/images/smile_title.jpg';
import Happy from '../../asset/images/happy.jpg';
import Sad from '../../asset/images/sad.jpg';
import Cry from '../../asset/images/cry.jpg';
import Moody from '../../asset/images/moody.jpg';
import Exclamation from '../../asset/images/exclamation.png';


import PainTitle from '../../asset/images/painTitle.jpg';
import Headache from '../../asset/images/headache.jpg';
import Cramps from '../../asset/images/cramps.jpg';
import BackPain from '../../asset/images/backPain.jpg';

import { db } from '../../util/firebase';
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from '../../context/auth';
import './personalMood.styles.scss';

function PersonalMood(props) {

  const { user } = useContext(AuthContext); // can localStorage the steps (click from tracker will create a store > check it here)
  const [userData, setUserData] = useState(undefined);
  const [open, setOpen] = React.useState(false);

  const history = useHistory(); 
  useEffect(() => {
    if (props.location.state === undefined) {
      history.push("/tracker") 
    } else {
      setUserData(props.location.state.userData)
    }
  }, []) 

  async function updateTrackerMood(mood) {
    await updateDoc(doc(db, "trackers", localStorage.getItem("token")), {
      mood: mood
    });
  };

  async function updateTrackerPain(pain) {
    await updateDoc(doc(db, "trackers", localStorage.getItem("token")), {
      pain: pain
    });
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  

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
              <Typography variant="h5" color="text.secondary" style={{ fontWeight: "600" }}>
                Period Flow Tracker 
              </Typography>
              <img className="bloodTarget-logo" src={SmileTitle} alt="..." />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Box my={10}>
              <Grid container style={{ textAlign: 'center' }}>
                <Grid item xs={6} sm={3}>
                  <Box mb={1}>
                    <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => {updateTrackerMood("happy"); handleClick();}}>
                      <img className="blood-logo" src={Happy} alt="s" style={{ width: '60px' }} />
                    </IconButton>
                  </Box>
                  <Typography variant="h6">
                    Happy
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box mb={1}>
                    <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => {updateTrackerMood("sad"); handleClick();}}>
                      <img className="blood-logo" src={Sad} alt="s" style={{ width: '60px' }} />
                    </IconButton>
                  </Box>
                  <Typography variant="h6">
                    Sad
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box mb={1}>
                    <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => {updateTrackerMood("cry"); handleClick();}}>
                      <img  className="blood-logo" src={Cry} alt="s" style={{ width: '60px' }} />
                    </IconButton>
                  </Box>
                  <Typography variant="h6">
                    Sensitive
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box mb={1}>
                    <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => {updateTrackerMood("moody"); handleClick();}}>
                      <img className="blood-logo" src={Moody} alt="s" style={{ width: '60px' }} />
                    </IconButton>
                  </Box>
                  <Typography variant="h6">
                    Mood Changes
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={2} sx={{ border: "1px solid black", borderRadius: "10px" }}>
              <Stack direction="row" spacing={2}>
                <img className="exclamation-logo" src={Exclamation} alt="!" />
                <Typography variant="h5" className="word-color">
                  <strong> About Mood Changes </strong>
                </Typography>
              </Stack>
              <Typography variant="body1">
                <p>
                  Moods and emotions characterize a person’s general emotional state. 
                </p>
                <Typography variant="h6">
                  <strong> Types of Emotions </strong>
                </Typography>
                <p>
                  <strong>Happy</strong> - Content and cheerful. Some people experience positive moods in relation to their cycle
                </p>
                <p>
                  <strong>Sad</strong> - Feeling a bit down. Some people report crying spells and feeling depressed, anxious, nervous or blue before the start of their period
                </p>
                <p>
                  <strong>Sensitive</strong> - Easily triggered. Some people report crying spells or feeling sensitive or tearful before the start of their period
                </p>
                <p>
                  <strong>Mood Changes</strong> - Rapid changes in mood. Some people experience sudden, unexplained changes in mood before the start of their period  
                </p>
              </Typography>
            </Box>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Mood Updated Successfully!
              </Alert>
            </Snackbar>
          </Grid>

          <Grid item xs={12}><Box my={10}><Divider> Pick your pain </Divider></Box></Grid>

          <Grid item xs={12}>
            <Box mt={10}>
              <Stack direction="row" spacing={2}>
                <Typography variant="h5" color="text.secondary" style={{ fontWeight: "600" }} id="pain">
                  Pain Tracker 
                </Typography>
                <img className="bloodTarget-logo" src={PainTitle} alt="..." />
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box my={10}>
              <Grid container style={{ textAlign: 'center' }}>
                <Grid item xs={6} sm={4}>
                  <Box mb={1}>
                    <IconButton component={Link} to={"/tracker"} style={{ backgroundColor: 'transparent' }} onClick={() => { updateTrackerPain("headache"); }}>
                      <img className="blood-logo" src={Headache} alt="s" style={{ width: '60px' }} />
                    </IconButton>
                  </Box>
                  <Typography variant="h6">
                    Headache & <br/> Migraine
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box mb={1}>
                    <IconButton component={Link} to={"/tracker"} style={{ backgroundColor: 'transparent' }} onClick={() => { updateTrackerPain("cramps"); }}>
                      <img className="blood-logo" src={Cramps} alt="s" style={{ width: '60px' }} />
                    </IconButton>
                  </Box>
                  <Typography variant="h6">
                    Abdominal <br /> Cramps
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box mb={1}>
                    <IconButton component={Link} to={"/tracker"} style={{ backgroundColor: 'transparent' }} onClick={() => { updateTrackerPain("backPain"); }}>
                      <img className="blood-logo" src={BackPain} alt="s" style={{ width: '60px' }} />
                    </IconButton>
                  </Box>
                  <Typography variant="h6">
                    Lower Back <br /> Pain
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box mt={5} p={2} sx={{ border: "1px solid black", borderRadius: "10px", textAlign: 'left' }}>
                    <Stack direction="row" spacing={2}>
                      <img className="exclamation-logo" src={Exclamation} alt="!" />
                      <Typography variant="h5" className="word-color">
                        <strong> About Pain </strong>
                      </Typography>
                    </Stack>
                    <Typography variant="body1">
                      <p>
                      Pain is physical discomfort. It may be felt as a prick, burn or sting. Pain is the body’s protective response to damage. 
                      Some people experience pain symptoms at specific times in their cycle. 
                      Tracking pain throughout the cycle for several cycles will help you determine which symptoms, if any, recur during your period.  
                      </p>
                      <Typography variant="h6">
                        <strong> Types of Pain </strong>
                      </Typography>
                      <p>
                        <strong>Headache</strong> - A sustained ache in the head. Headaches are common premenstrual and menstrual symptoms. Prostaglandins, which are hormone-like substances that help the uterus contract to shed the uterine lining, have been proposed to play a role.  
                      </p>
                      <p>
                        <strong>Sad</strong> - Pain from cramping of the uterus. Cramps are common pain symptoms in the days before and during menstruation. Prostaglandins also cause abdominal cramps. 
                      </p>
                      <p>
                        <strong>Lower Back Pain</strong> - Pain felt in the lower back due to cramping of the uterus. 
                      </p>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default PersonalMood;