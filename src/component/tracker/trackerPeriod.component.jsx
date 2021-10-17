import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import './trackerPeriod.styles.scss';
import TrackResults from './trackResults.component';

function TrackPeriod() {

  const [date, setDate] = useState(moment()); // current time
  const [focusedInput, setFocusedInput] = useState(false);
  const [count, setCount] = useState(5);
  const [cycleCount, setCycleCount] = useState(28);
  const [doReveal, setDoReveal] = useState(false);

  const handleDaysLast = (isMinus) => {
    if (isMinus) {
      if (count > 1) {
        setCount(count - 1);
      } else {
        setCount(10);
      }
    } else {
      if (count >= 10) {
        setCount(1);
      } else {
        setCount(count + 1);
      }
    }
  }

  const handleMenstrualCycle = (isMinus) => {
    if (isMinus) {
      if (cycleCount > 18) {
        setCycleCount(cycleCount - 1);
      } else {
        setCycleCount(40);
      }
    } else {
      if (cycleCount >= 40) {
        setCycleCount(18);
      } else {
        setCycleCount(cycleCount + 1);
      }
    }
  }

  return (
    <Box >
      <Grid container style={{ backgroundColor: "#E8DEFF", textAlign: "center", padding: "10px" }} >
        <Grid item xs={12} md={4}>
          <Box my={3}>
            <Typography variant="h6">
              1. When did your last period start?
            </Typography>
          </Box>

          <Box >
          <Grid container style={{ textAlign: 'center', display: 'flex' }}>
            <Grid item xs={6}>
              <SingleDatePicker
                date={date} // momentPropTypes.momentObj or null
                onDateChange={date => setDate(date)} // PropTypes.func.isRequired
                focused={focusedInput} // PropTypes.bool
                onFocusChange={({ focused }) => setFocusedInput( focused )} // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
                // displayFormat={() => "DD-MMM-YY"}
                displayFormat={() => "D"}
                renderDayContents={(momentDate) => 
                  <Grid container>
                    <Grid item xs={12}>
                      {/* <span style={{ fontSize: "100%" }}>🩸</span>
                      <span style={{ fontSize: "100%" }}>😭</span> */}
                    </Grid>
                    <Grid item xs={12}>
                      {momentDate.date()} 
                    </Grid>
                  </Grid>
                }
                numberOfMonths="1"
                isOutsideRange={() => false}
                readOnly
                noBorder
                customInputIcon={<EventNoteIcon />}
                minDate={moment().subtract(1, "M")}
                maxDate={moment().add(3, "M")}
              />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Box onClick={() => setFocusedInput(true)}>
                <Box className="date-day">
                  { date.format("dddd") }
                </Box>
                <Box className="date-day">
                  { date.format("MMMM") }
                </Box>
              </Box>
            </Grid>
          </Grid>
          </Box>

        </Grid>
        <Grid item xs={12} md={4}>
          <Box my={3}>
            <Typography variant="h6">
              2. How many days did it last?
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button color="inherit" variant="outlined" onClick={() => handleDaysLast(true)}><RemoveIcon /></Button>
            <Box className="days-count" mx={5}>
              { count }
            </Box>
            <Button color="inherit" variant="outlined" onClick={() => handleDaysLast(false)}><AddIcon /></Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box my={3}>
            <Typography variant="h6">
              3. Duration of menstrual cycle?
            </Typography>
          </Box>
          <Box mt={"auto"} sx={{ display: "flex", justifyContent: "center" }}>
            <Button color="inherit" variant="outlined" onClick={() => handleMenstrualCycle(true)}><RemoveIcon /></Button>
            <Box className="days-count" mx={5}>
              {/* <TextField variant="filled" value={ cycleCount } onChange={(e) => setCycleCount(e.target.value)} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /> */}
              { cycleCount }
            </Box>
            <Button color="inherit" variant="outlined" onClick={() => handleMenstrualCycle(false)}><AddIcon /></Button>
          </Box>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {
            !doReveal ?
            <Box my={3}>
              <Button variant="contained" className="track-button" onClick={() => setDoReveal(true)}>Track Now</Button>
            </Box>
            :
            <Box my={3}>
              <Button component="a" href="#Results" color="secondary" variant="contained">
                Look below
              </Button>
            </Box>
          }
        </Grid>
      </Grid>
      <Box>

      </Box>

      {/* Results */}
      {
        doReveal ? 
        <Box my={3}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">
                Next 3 months
              </Typography>
            </Grid>
            <Grid item xs={12} id="Results">
              {/* <MemorizeResults startPeriodDate={date} daysLast={count} cycleCount={cycleCount} render={render}  /> */}
              <TrackResults startPeriodDate={date} daysLast={count} cycleCount={cycleCount}  />
            </Grid>
          </Grid>
        </Box>
        :
        null
      }
    </Box>
  )
}

export default TrackPeriod