import React, { useState, useEffect } from 'react';
import { DayPickerRangeController } from 'react-dates';
// import moment from 'moment'
import Grid from '@mui/material/Grid';

function TrackResults({ startPeriodDate, daysLast, cycleCount }) {

  // const [startDate, setStartDate] = useState(startPeriodDate.clone());
  // const [endDate, setEndDate] = useState(startPeriodDate.clone().add(daysLast, "days"));
  // const [focusedInput, setFocusedInput] = useState(false);
  const [menses, setMenses] = useState([startPeriodDate.clone(), startPeriodDate.clone().add(daysLast, "days")]);
  // const [nextStart, setNextStart] = useState(startPeriodDate.clone().add(cycleCount, "days"));

  useEffect(() => {
    // setStartDate(startPeriodDate);
    // setEndDate(startPeriodDate.clone().add(daysLast, "days"))
    setMenses([startPeriodDate.clone(), startPeriodDate.clone().add(daysLast, "days")]);
    // setNextStart(nextStart.clone().add(cycleCount, "days"));
  }, [startPeriodDate, daysLast])

  const check = (momentDate) => {
    return (momentDate.isBetween(menses[0].clone().subtract(1, "days"), menses[1].clone())
    || momentDate.isBetween(menses[0].clone().add(cycleCount, "days").subtract(1, "days"), menses[1].clone().add(cycleCount, "days"))
    || momentDate.isBetween(menses[0].clone().add(cycleCount * 2, "days").subtract(1, "days"), menses[1].clone().add(cycleCount * 2, "days")))
  }

  const checkHighlight = (momentDate) => {
    return (momentDate.isBetween(menses[0].clone().subtract(1, "days"), menses[1].clone().subtract(1, "days"))
    || momentDate.isBetween(menses[0].clone().add(cycleCount, "days").subtract(1, "days"), menses[1].clone().add(cycleCount, "days").subtract(1, "days"))
    || momentDate.isBetween(menses[0].clone().add(cycleCount * 2, "days").subtract(1, "days"), menses[1].clone().add(cycleCount * 2, "days").subtract(1, "days")))
  }

  return (
    <div>
      <DayPickerRangeController
        // startDate={startDate} // momentPropTypes.momentObj or null,
        // endDate={endDate} // momentPropTypes.momentObj or null,
        // onDatesChange={({ sd, ed }) => {setStartDate(sd); setEndDate(ed)}} // PropTypes.func.isRequired,
        // focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        // onFocusChange={fi => setFocusedInput(fi)} // PropTypes.func.isRequired,
        // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
        // startDate={startDate}
        // endDate={endDate}
        // initialVisibleMonth={() => startDate}
        // focused={true}
        // minDate={moment().subtract(1, "M")}
        // maxDate={moment().add(2, "M")}
        numberOfMonths="3"
        renderDayContents={(momentDate) => 
          <Grid container>
            <Grid item xs={12}>
              {/* menses[0].date() <= momentDate.date() && momentDate.date() < menses[1].date() ? */}
              {
                
                check(momentDate) ?
                  <>
                    <span style={{ fontSize: "100%" }}>🩸</span>
                    {/* <span style={{ fontSize: "100%" }}>😭</span> */}
                  </>
                :
                null
              }
            </Grid>
            <Grid item xs={12}>
              {momentDate.date()} 
            </Grid>
          </Grid>
        }
        isDayHighlighted={(momentDate) => (checkHighlight(momentDate) ? true : false)}
        navPrev={() => null}
        navNext={() => null}
        
      />
    </div>
  )
}

export default TrackResults;