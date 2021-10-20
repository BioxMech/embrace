import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

// import './donate.styles.scss';
import Clock from '../../asset/images/clock.png';

function Reminder() {
    return (
        <Box  my={2} py={8}>
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h3" style={{ fontWeight: 800 }} align="center" color="text.primary" gutterBottom>
                Priyanka’s Reminders
                </Typography>
                <Grid item xs={12} >
                <Box mb={3} style={{ textAlign: 'center' }}>
                <img src={Clock} alt="..." className="clock-img" />
                </Box>
                </Grid>
                <Typography style={{color:"#ff4081", fontWeight: 800}} variant="h4" align="center" gutterBottom>
                  We Need <i>Your</i> Help
                </Typography>
                <Box mt={5} mb={5}>
                  <Typography variant="h6" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                    YOU can help us change the lives of 23 million girls - who drop out of school due to lack of menstrual hygiene and awareness. With as little as $1 you can prevent a girl in India from dropping out of school and change her life.
                  </Typography>
                </Box>
                <Box mb={5}>
                  <Typography variant="body1" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                    Come join us on this journey of normalizing menstruation in India. Your gift will go a long way in empowering women all across Telangana and beyond in the future.
                  </Typography>
                  <Typography variant="body1" align="center" color="text.primary" gutterBottom style={{ fontWeight: 400 }}>
                    Your gift will go a long way in empowering women all across Telangana and beyond in the future.
                  </Typography>
                </Box>
              </Grid>
              </Grid>
        </Container>
        </Box>

)
}

export default Reminder;