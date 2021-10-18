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


import Woman from '../../asset/images/woman.png';
// import { AuthContext } from '../../context/auth';
import './mysubscription.styles.scss';

function Mysubscription() {

    // const { user } = useContext(AuthContext);
    return (
      <Box my={2} py={6}>
        <Container maxWidth="sm">
          <Grid container spacing={4}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Avatar alt="src" src={Woman} sx={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto' }} />
              <Typography gutterBottom variant="h4">
                Priyanka
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box my={2}>
                <Typography variant="h6">
                    My Subscriptions
                </Typography>
              </Box>
                <Card elevation={5}>
                  <CardContent>
                  <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                      <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                        Package Type
                      </Typography>
                      <Typography variant="body1">
                        Monthly
                      </Typography>
                    </Box>
                    <Divider />
                    <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                      <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                        Price
                      </Typography>
                      <Typography variant="body1">
                        90 ₹
                      </Typography>
                    </Box>
                    <Divider />
                      <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                      Duration
                    </Typography>
                      <Typography variant="body1">
                        4/12/2021 - 5/1/2022 (1 month)
                      </Typography>
                    </Box>
                    <Divider />
                  </CardContent>
                </Card>
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    );

}
export default Mysubscription;