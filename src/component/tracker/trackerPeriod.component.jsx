import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

function TrackPeriod() {

  const [value, setValue] = React.useState(new Date());

  return (
    <Grid container style={{ backgroundColor: "#E8DEFF"}} spacing={2}>
      <Grid item xs={4}>
        <Box >
          <Typography variant="h6">
            1. When did your last period start?
          </Typography>
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={value}
              shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box >
          <Typography variant="h6">
            2. How many days did it last?
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box >
          <Typography variant="h6">
            3. How long is your usual menstrual cycle?
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default TrackPeriod