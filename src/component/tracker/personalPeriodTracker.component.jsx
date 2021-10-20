import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventNoteIcon from '@mui/icons-material/EventNote';

import { AuthContext } from '../../context/auth';
import Blood from '../../asset/images/blood.jpg';
import SmileTitle from '../../asset/images/smile_title.jpg';
import Happy from '../../asset/images/happy.jpg';
import Sad from '../../asset/images/sad.jpg';
import Cry from '../../asset/images/cry.jpg';
import Moody from '../../asset/images/moody.jpg';
import Exclamation from '../../asset/images/exclamation.png';
import Popover from '@mui/material/Popover';

import PainTitle from '../../asset/images/painTitle.jpg';
import Headache from '../../asset/images/headache.jpg';
import Cramps from '../../asset/images/cramps.jpg';
import BackPain from '../../asset/images/backPain.jpg';

function PersonalPeriodTracker({ userData, bloodLevel, mood, pain }) {

  return (
    <>
      <Hidden smUp>
        <Grid xs={12} sm={6}>
          <Box>
            <Box className="circle-day">
              <Box className={"inner-circle " + ( pain !== null && mood !== null && bloodLevel !== null ? "bloodCircle" : "" )}>
                {
                  pain !== null && mood !== null && bloodLevel !== null ? 
                  <Box>
                    <Typography variant="h4" style={{ color: '#F3BFBC' }}>Day</Typography>
                    <Typography variant="h1" style={{ color: '#F3BFBC' }}>01</Typography>
                  </Box>
                  :
                  <>
                    <Typography variant="h4" color="text.secondary">Today:</Typography>
                    <Typography variant="h1" color="text.secondary" >{ moment().format("MMM DD") }</Typography>
                  </>
                }
              </Box>
            </Box>
          </Box>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={6}>
        <Box my={3}>
          <Typography variant="h4" className="logged-in-title">
            Hi, <strong>{ userData ? userData.displayName : "User" }</strong>
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="body1" style={{ fontWeight: 800, fontFamily: "'Quicksand', sans-serif"}}>
            { pain !== null && mood !== null && bloodLevel !== null ? "Today - Day 1 of your cycle" : "Today - Set up your cycle"}
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="subtitle2" color="text.secondary">
            Next period in <strong style={{ color: '#E26058' }}>{ pain !== null && mood !== null && bloodLevel !== null ? "19 days" : "N/A" }</strong>
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Chance of pregnancy: <strong style={{ color: "#2BA3BD" }}>{ pain !== null && mood !== null && bloodLevel !== null ? "Low" : "N/A" }</strong>
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Ovulation in: <strong style={{ color: '#9867C5' }}>{ pain !== null && mood !== null && bloodLevel !== null ? "14 days" : "N/A" }</strong>
          </Typography>
        </Box>
        <Box my={3} >
          <Typography variant="h6">
            {
              bloodLevel === null ?
                <>
                  Add Period 
                  <IconButton component={Link} to={{ pathname: "/personalBloodFlow", state: { userData: userData }}} onClick={() => { window.scrollTo(0, 0);}}><ControlPointIcon /></IconButton> 
                </>
              :
                <>
                  Period Flow Tracker
                  <IconButton component={Link} to={{ pathname: "/personalBloodFlow", state: { userData: userData }}} onClick={() => { window.scrollTo(0, 0);}}><ControlPointIcon /></IconButton> 
                  <Stack direction="row" spacing={2} style={{ textAlign: 'center' }}>
                    {
                      bloodLevel === "low" ?
                        <Box>
                          <img src={Blood} alt="s" style={{ width: '30px' }} />
                          <Typography variant="body2" style={{ fontWeight: 800 }}>Low</Typography>
                        </Box>
                      :
                      bloodLevel === "medium" ?
                        <Box>
                          <img src={Blood} alt="s" style={{ width: '60px' }} />
                          <Typography variant="body2" style={{ fontWeight: 800 }}>Medium</Typography>
                        </Box>
                      :
                      <Box>
                        <img src={Blood} alt="s" style={{ width: '60px' }} />
                        <img src={Blood} alt="s" style={{ width: '60px' }} />
                        <Typography variant="body2" style={{ fontWeight: 800 }}>Heavy</Typography>
                      </Box>
                    }
                  </Stack>
                </>
            }
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="h6">
            How do you feel today? 
            <IconButton component={Link} to={{ pathname: "/personalMood", state: { userData: userData }}} onClick={() => { window.scrollTo(0, 0);}} ><ControlPointIcon /></IconButton> 
          </Typography>
          <Stack direction="row" spacing={2} style={{ textAlign: 'center' }}>
            {
              mood !== null ?
              mood === "happy" ?
              <Box>
                <img src={Happy} alt="s" style={{ width: '60px' }} />
                <Typography variant="body2" style={{ fontWeight: 800 }}>Happy</Typography>
              </Box>
              :
              mood === "sad" ?
              <Box>
                <img src={Sad} alt="s" style={{ width: '60px' }} />
                <Typography variant="body2" style={{ fontWeight: 800 }}>Sad</Typography>
              </Box>
              :
              mood === "cry" ?
              <Box>
                <img src={Cry} alt="s" style={{ width: '60px' }} />
                <Typography variant="body2" style={{ fontWeight: 800 }}>Sensitive</Typography>
              </Box>
              : 
              mood === "moody" ?
              <Box>
                <img src={Moody} alt="s" style={{ width: '60px' }} />
                <Typography variant="body2" style={{ fontWeight: 800 }}>Mood <br /> Changes</Typography>
              </Box>
              : null : null
            }
            {
              pain !== null ?
              pain === "headache" ?
              <Box>
                <img src={Headache} alt="s" style={{ width: '60px' }} />
                <Typography variant="body2" style={{ fontWeight: 800 }}>Headache</Typography>
              </Box>
              :
              pain === "cramps" ?
              <Box>
                <img src={Cramps} alt="s" style={{ width: '60px' }} />
                <Typography variant="body2" style={{ fontWeight: 800 }}>Abdominal <br/> Cramps</Typography>
              </Box>
              :
              pain === "backPain" ?
              <Box>
                <img src={BackPain} alt="s" style={{ width: '60px' }} />
                <Typography variant="body2" style={{ fontWeight: 800 }}>Lower Back <br /> Pain</Typography>
              </Box>
              : null : null
            }
            
          </Stack>
        </Box>
        <Box my={3}>
          <Typography variant="h6">
            Set Reminder For Period
          </Typography>
        </Box>
        <Box my={3}>
          <Button variant="filled" style={{ backgroundColor: "#FA4C86", color: "white" }} endIcon={<ArrowForwardIosIcon />} href="/reminder" >Set Reminder Now</Button>
        </Box>
      </Grid>
      <Hidden smDown>
        <Grid xs={12} sm={6}>
          <Box my={10}>
            <Box className="circle-day">
              <Box className={"inner-circle " + ( pain !== null && mood !== null && bloodLevel !== null ? "bloodCircle" : "" )}>
                {
                  pain !== null && mood !== null && bloodLevel !== null ? 
                  <Box>
                    <Typography variant="h4" style={{ color: '#F3BFBC' }}>Day</Typography>
                    <Typography variant="h1" style={{ color: '#F3BFBC' }}>01</Typography>
                  </Box>
                  :
                  <>
                    <Typography variant="h4" color="text.secondary">Today:</Typography>
                    <Typography variant="h1" color="text.secondary" >{ moment().format("MMM DD") }</Typography>
                  </>
                }
              </Box>
            </Box>
          </Box>
          <Box ml={10}>
            <Button component={Link} to={{ pathname: "/personalCalendar", state: { userData: userData }}} variant="filled" style={{ backgroundColor: "#9867C5", color: "white" }} startIcon={<EventNoteIcon />}>View My Calendar</Button>
          </Box>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={6}>
        <Hidden smUp>
          <Box >
            <Button component={Link} to={{ pathname: "/personalCalendar", state: { userData: userData }}} variant="filled" style={{ backgroundColor: "#9867C5", color: "white" }} startIcon={<EventNoteIcon />}>View My Calendar</Button>
          </Box>
        </Hidden>
      </Grid>
    </>
  )
}

export default PersonalPeriodTracker;