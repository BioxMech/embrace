import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

import './reminder.styles.scss';
import Clock from '../../asset/images/clock.png';

function Reminder() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <Box  my={2} py={8}>
          <Container maxWidth="md">
            <Grid container>
            <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
                <Typography variant="h3" style={{ fontWeight: 800 }} align="center" color="text.primary" gutterBottom>
                Priyanka’s Reminders
                </Typography>
                <Box mt={1} ml={2} style={{ textAlign: 'center' }}>
                    <img src={Clock} alt="..." className="clock-img" />
                </Box>
            </Grid>
            <Grid container spacing={5}>
            <Grid item xs={12}>
                <Typography style={{color:"#9867C5"}} variant="h4" align="center" gutterBottom>
                <b>PERIOD & FERTILITY</b>
                </Typography>
                
                <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
                    <Typography variant="h6" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                    Period is coming
                    </Typography>
                    <Box ml={25} style={{ textAlign: 'center' }}>
                        <Switch {...label} defaultChecked style={{color:"#ff4081"}}/>
                    {/* <Button size="small" fullWidth variant="contained" style={{ backgroundColor: "#ff4081"}} >ON</Button> */}
                    </Box>
                </Grid>
                <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
                    <Typography variant="h6" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                    Fertility is coming
                    </Typography>
                    <Box ml={25} style={{ textAlign: 'center' }}>
                        <Switch {...label} defaultChecked style={{color:"#ff4081"}}/>
                    </Box>
                </Grid>
                <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
                    <Typography variant="h6" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                    Ovulation day
                    </Typography>
                    <Box ml={25} style={{ textAlign: 'center' }}>
                        <Switch {...label} defaultChecked style={{color:"#ff4081"}}/>
                    </Box>
                </Grid>
                <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
                    <Typography variant="h6" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                    Input your period
                    </Typography>
                    <Box ml={25} style={{ textAlign: 'center' }}>
                        <Switch {...label} defaultChecked style={{color:"#ff4081"}}/>
                    </Box>
                </Grid>
            </Grid>
            </Grid>

            <Grid container spacing={5}>
            <Grid item xs={12}>
                <Typography style={{color:"#9867C5"}} variant="h4" align="center" gutterBottom>
                <b>LIFESTYLE</b>
                </Typography>
                
                <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
                    <Typography variant="h6" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                    Meditation reminder
                    </Typography>
                    <Box ml={25} style={{ textAlign: 'center' }}>
                        <Switch {...label} defaultChecked style={{color:"#ff4081"}}/>
                    </Box>
                </Grid>
                <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
                    <Typography variant="h6" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                    Sleep early reminder
                    </Typography>
                    <Box ml={25} style={{ textAlign: 'center' }}>
                        <Switch {...label} defaultChecked style={{color:"#ff4081"}}/>
                    </Box>
                </Grid>
                <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
                    <Typography variant="h6" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                    Drink water reminder
                    </Typography>
                    <Box ml={25} style={{ textAlign: 'center' }}>
                        <Switch {...label} defaultChecked style={{color:"#ff4081"}}/>
                    </Box>
                </Grid>
            </Grid>
            </Grid>

        </Grid>
        </Container>
    </Box>

)
}

export default Reminder;