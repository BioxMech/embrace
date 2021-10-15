import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import Woman from '../../asset/images/woman.png';
// import { AuthContext } from '../../context/auth';
import './profile.styles.scss';

function Profile() {

    // const { user } = useContext(AuthContext);
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
      height: 10,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
      },
    }));

    return (
      <Box my={2} py={6}>
        <Container maxWidth="sm">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
              <Avatar alt="src" src={Woman} sx={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto' }} />
              <Typography gutterBottom variant="h4">
                Priyanka
              </Typography>
              <Button className="profile-special-buttons" component="a" href="/mysubscription" color="inherit">
                My Subscriptions
              </Button>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box my={2}>
                <Typography variant="h6">
                    Basic Information
                </Typography>
              </Box>
                <Card elevation={5}>
                  <CardContent>
                  <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                    Name
                    </Typography>
                    <Typography variant="body1">
                    Priyanka
                    </Typography>
                    </Box>
                    <Divider />
                    <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                    Email
                    </Typography>
                    <Typography variant="body1">
                    priyanka@inmail.com
                    </Typography>
                    </Box>
                    <Divider />
                    <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                    Address
                    </Typography>
                    <Typography variant="body1">
                    468, Gurudwara Bldg, Dr B A Rd, Dadar (east)
                    </Typography>
                    </Box>
                    <Divider />
                  </CardContent>
                </Card>
                <Box pt={2}>
                <Typography variant="subtitle1" style={{ fontWeight: 500, color: "#FB5858"}}>
                My Average Cycle Length
                </Typography>
                <Typography variant="subtitle1" style={{ fontWeight: 400 }}>
                28 days
                </Typography>
                {/* <BorderLinearProgress variant="determinate" value={50} /> */}
                </Box>
                <Box>
                <Typography variant="subtitle1" style={{ fontWeight: 500, color: "#FB5858"}}>
                My Average Period Length
                </Typography>
                <Typography variant="subtitle1" style={{ fontWeight: 400 }}>
                8 days
                </Typography>
                {/* <BorderLinearProgress variant="determinate" value={50} /> */}
                </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );

}
export default Profile;