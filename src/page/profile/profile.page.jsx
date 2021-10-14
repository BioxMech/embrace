import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';

import Container from '@mui/material/Container';
// import GlobalStyles from '@mui/material/GlobalStyles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Woman from '../../asset/images/woman.png';

import { AuthContext } from '../../context/auth';


import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

function Profile() {
    // const { user } = useContext(AuthContext);

    return (
        <Box my={2} py={6}>
            {/* <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} /> */}
            <Container maxWidth="sm">
                <Grid container spacing={4}>
                    <Grid item xs={4} sm={4}>
                        <Avatar
                        alt = 'src' 
                        src = {Woman}
                        imgProps = {{ sizes: 5000}}    
                        >
                        </Avatar>
                        <Typography gutterBottom variant="h4">
                                Priyanka
                            </Typography>
                        <Card>
                         <CardContent>
                            <Typography gutterBottom variant="h6">
                                My Subscriptions
                            </Typography>
                        </CardContent>
                            <CardActions>
                            <Button size="small" fullWidth variant="contained" style={{ backgroundColor: "#ff4081" }}>Log Out</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={8}>
                    {/* <Grid item xs={6} md={8}> */}
                        <Card>
                         <CardHeader
                            title = "Basic Information" //HOW TO BOLD THIS?
                            titleTypographyProps={{ align: 'left' }}
                            >
                         </CardHeader>
                            <CardContent>
                                <Typography gutterBottom variant="subtitle2">
                                    Name
                                </Typography>
                                <Typography gutterBottom variant="subtitle2">
                                    Email
                                </Typography>
                                <Typography gutterBottom variant="subtitle2">
                                    Address
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )

}
export default Profile;


 






