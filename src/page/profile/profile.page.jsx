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
import Stack from '@mui/material/Stack';

import Woman from '../../asset/images/woman.png';
// import { AuthContext } from '../../context/auth';
import './profile.styles.scss';

function Profile() {

    // const { user } = useContext(AuthContext);

    return (
      <Box my={2} py={6}>
        <Container maxWidth="sm">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
              <Avatar alt="src" src={Woman} sx={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto' }} />
              <Typography gutterBottom variant="h4">
                Priyanka
              </Typography>
              <Button className="profile-special-buttons" component="a" href="/my-subscriptions" color="inherit">
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
                    <Stack direction="row" my={2} spacing={5}>
                      <Typography gutterBottom variant="body1">
                        Name
                      </Typography>
                      <Typography variant="body1">
                        Priyanka
                      </Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" my={2} spacing={5}>
                      <Typography gutterBottom variant="body1">
                        Email
                      </Typography>
                      <Typography variant="body1">
                        priyanka@inmail.com
                      </Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" my={2} spacing={5}>
                      <Typography gutterBottom variant="body1">
                        Address
                      </Typography>
                      <Typography variant="body1">
                        468, Gurudwara Bldg, Dr B A Rd, Dadar (east)
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    );

}
export default Profile;