import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { jsPDF } from "jspdf";
import moment from 'moment';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Grid';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import Blood from '../../asset/images/blood.jpg';
import Happy from '../../asset/images/happy.jpg';
import Sad from '../../asset/images/sad.jpg';
import Cry from '../../asset/images/cry.jpg';
import Moody from '../../asset/images/moody.jpg';
import Headache from '../../asset/images/headache.jpg';
import Cramps from '../../asset/images/cramps.jpg';
import BackPain from '../../asset/images/backPain.jpg';
import ProfilePhoto from '../../asset/images/woman.png';

import { db } from '../../util/firebase';
import { getDoc, doc } from "firebase/firestore";
import './personalCalendar.styles.scss';
import { AuthContext } from '../../context/auth';

function PersonalCalendar(props) {

  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(undefined);
  const history = useHistory(); 
  const [bloodLevel, setBloodLevel] = useState(null);
  const [mood, setMood] = useState(null);
  const [pain, setPain] = useState(null);
  const [firstDate, setFirstDate] = useState(moment());
  const [bloodLevelArr, setBloodLevelArr] = useState([]);

  async function checkDB() {
    if (!user) { return null; }
    const docRef = doc(db, "users", localStorage.getItem("token"));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setUserData(docSnap.data())
      checkTracker();
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
      const first = moment(new Date(data.date.seconds * 1000));
      const second = moment(new Date(data.date.seconds * 1000)).add(1, "days");
      const third = moment(new Date(data.date.seconds * 1000)).add(2, "days");
      const fourth = moment(new Date(data.date.seconds * 1000)).add(3, "days");
      const fifth = moment(new Date(data.date.seconds * 1000)).add(4, "days");
      if (data.bloodLevel === "low") {
        setBloodLevelArr([{ date: first, blood : "low"},{date: second, blood : "low"},{date: third, blood:"low"},{date: fourth, blood:"low"},{date: fifth, blood:"low"}])
      } else if (data.bloodLevel === "medium") {
        setBloodLevelArr([{ date: first, blood : "medium"},{date: second, blood : "medium"},{date: third, blood:"low"},{date: fourth, blood:"low"},{date: fifth, blood:"low"}])
      } else if (data.bloodLevel === "heavy") {
        setBloodLevelArr([{ date: first, blood : "heavy"},{date: second, blood : "heavy"},{date: third, blood:"medium"},{date: fourth, blood:"low"},{date: fifth, blood:"low"}])
      }
      setMood(data.mood);
      setPain(data.pain);
      setFirstDate(moment(new Date(data.date.seconds * 1000))); // convert to moment()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such tracker!");
    }
  }

  useEffect(() => {
    if (props.location.state === undefined) {
      console.log("HISTORY")
      history.push("/tracker") 
    } else {
      setUserData(props.location.state.userData)
    }

    checkDB();
  }, []) 

  const generatePDF = () => {
    var doc = new jsPDF("l", "pt", "A3");
    doc.html(document.querySelector("#Tracker-Results"), {
      callback: function(pdf) {
        pdf.save("my_tracker_results.pdf");
      }
    })
  }

  const [startDate, setStartDate] = useState(moment());
  // const [endDate, setEndDate] = useState(startPeriodDate.clone().add(daysLast, "days"));
  const [focusedInput, setFocusedInput] = useState("START_DATE");
  const [initialMonth, setInitialMonth] = useState(moment());

  const check = (momentDate) => {
    return (momentDate.isBetween(firstDate.clone().subtract(1, "days"), firstDate.clone().add(4, "days"))
    || momentDate.isBetween(firstDate.clone().add(28, "days").subtract(1, "days"), firstDate.clone().add(28, "days")))
  }

  const checkDate = (momentDate, blood) => {
    for( let i = 0; i < bloodLevelArr.length; i++) {
      if (bloodLevelArr[i].date.date() === (momentDate.date()) && blood === bloodLevelArr[i].blood) {
        return true;
      }
    }
    return false;
  }

  return (
    <Box my={5} >
      <Paper elevation={0} id="Tracker-Results" className="personal-calendar">
        <Container maxWidth="lg">
          <Stack direction="row" spacing={1} my={5} alignItems="center">
            <Avatar alt="P" src={userData ? userData.photoURL === undefined ? ProfilePhoto : userData.photoURL : ProfilePhoto } />
            <Typography variant="h1" style={{ color: "#9867C5" }}>
              { userData ? userData.displayName : null}'s <span style={{ fontWeight: 800 }}>Cycle</span>
            </Typography>
          </Stack>
        </Container>
          <DayPickerRangeController
          // startDate={startDate} // momentPropTypes.momentObj or null,
          // endDate={endDate} // momentPropTypes.momentObj or null,
          // onDatesChange={({ sd, ed }) => {setStartDate(sd); }} // PropTypes.func.isRequired,
          // focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          // onFocusChange={fi => console.log} // PropTypes.func.isRequired,
          // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
          // startDate={startDate}
          // endDate={endDate}
          // initialVisibleMonth={() => initialMonth}
          // focused={true}
          // minDate={moment().subtract(1, "M")}
          minDate={moment()}
          maxDate={moment().add(1, "M")}
          noBoarder
          orientation="vertical"
          withFullScreenPortal 
          autoFocus 
          navPrev={() => false}
          navNext={() => false}
          renderDayContents={(momentDate) => 
            <Grid container style={{ margin: 0, padding:0}}>
              <Grid item xs={12}>
                { momentDate.date() } 
              </Grid>
              <Grid item xs={12} style={{margin: 0,  marginTop: '5px',padding:0 }}>
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
              {
                check(momentDate) ?
                  bloodLevel === null || pain === null || mood === null ?
                    null 
                  :
                  <>
                    {
                      bloodLevel === "low" || checkDate(momentDate, "low") ?
                        <Box>
                          <img src={Blood} alt="s" style={{ width: '8px' }} /> 
                        </Box>
                      :
                      bloodLevel === "medium" || checkDate(momentDate, "medium") ?
                        <Box>
                          <img src={Blood} alt="s" style={{ width: '10px' }} />
                        </Box>
                      :
                      <Box>
                        <img src={Blood} alt="s" style={{ width: '10px' }} /> 
                        <img src={Blood} alt="s" style={{ width: '10px' }} />
                      </Box>
                    }
                  </>
                : null
              }
              {
                momentDate.date() === firstDate.date() ?
                    
                      mood === "happy" ?
                      <Box>
                        <img src={Happy} alt="s" style={{ width: '20px' }} />
                      </Box>
                      :
                      mood === "sad" ?
                      <Box>
                        <img src={Sad} alt="s" style={{ width: '20px' }} />
                      </Box>
                      :
                      mood === "cry" ?
                      <Box>
                        <img src={Cry} alt="s" style={{ width: '20px' }} />
                      </Box>
                      : 
                      mood === "moody" ?
                      <Box>
                        <img src={Moody} alt="s" style={{ width: '20px' }} />
                      </Box>
                      : null
                  :null
              }
              { momentDate.date() === firstDate.date() ?
                    
                      pain === "headache" ?
                      <Box>
                        <img src={Headache} alt="s" style={{ width: '20px' }} />
                      </Box>
                      :
                      pain === "cramps" ?
                      <Box>
                        <img src={Cramps} alt="s" style={{ width: '20px' }} />
                      </Box>
                      :
                      pain === "backPain" ?
                      <Box>
                        <img src={BackPain} alt="s" style={{ width: '20px' }} />
                      </Box>
                      : null
                    
                    : null
              }
              </Stack>
              </Grid>
              
            </Grid>
          }
          // isDayHighlighted={ (momentDate) => (checkHighlight(momentDate) ? true : false) }
          renderWeekHeaderElement={(props) => <span>
            { props === "Su" ? "Sun" : ""}
            { props === "Mo" ? "Mon" : ""}
            { props === "Tu" ? "Tue" : ""}
            { props === "We" ? "Wed" : ""}
            { props === "Th" ? "Thu" : ""}
            { props === "Fr" ? "Fri" : ""}
            { props === "Sa" ? "Sat" : ""}
          </span>}
        />
        
      </Paper>
      <Box mt={3} style={{ textAlign: 'center' }}>
          <Button variant="contained" endIcon={ <FileDownloadIcon /> } className="track-button" onClick={generatePDF}>
            Print your calendar
          </Button>
        </Box>
    </Box>
  )
}

export default PersonalCalendar;