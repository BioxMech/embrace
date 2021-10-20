import React, { useContext, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { db } from '../../util/firebase';
import { getDoc, doc } from "firebase/firestore";
import ProfilePicture from '../../asset/images/woman.png';
import { AuthContext } from '../../context/auth';
import './profile.styles.scss';

function Profile() {

    const { user } = useContext(AuthContext);

    const [userData, setUserData] = useState(null);
    
    async function checkDB() {
      if (!user) { return null; }
      const docRef = doc(db, "users", localStorage.getItem("token"));
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setUserData(docSnap.data())
      } else {
        // doc.data() will be undefined in this case
        console.log("No such user!");
      }
    }

    useEffect(() => {
      checkDB();
    }, [])
    
    return (
      <Box my={2} py={6}>
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
              {/* <Avatar alt="src" src={Woman} sx={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto' }} /> */}
              <Box mb={1}>
                <Avatar alt="P" sx={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto' }} 
                  src={ 
                    user ? 
                      userData ? 
                        (userData.photoURL !== null && userData.photoURL !== undefined) ? 
                          userData.photoURL 
                          : 
                          (user.photoURL !== null && user.photoURL !== undefined) ? 
                            user.photoURL 
                            : 
                            ProfilePicture 
                      : 
                      (user.photoURL !== null && user.photoURL !== undefined) ? 
                        user.photoURL 
                        : 
                        ProfilePicture 
                    : 
                    ProfilePicture 
                  } 
                />
              </Box> 
              <Typography gutterBottom variant="h4">
                {/* Priyanka */}
                { user ? userData ? userData.displayName : user.displayName !== null ? user.displayName : "Loading..." : "Loading..." }
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box my={2}>
                <Typography variant="h6">
                  Basic Information
                </Typography>
             </Box>
              <Box>
                <Card elevation={5}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={3}>
                        {/* <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}> */}
                        <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                          Name
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body1">
                          {/* Priyanka */}
                          { user ? userData ? userData.displayName : user.displayName !== null ? user.displayName : "Loading..." : "Loading..." }
                        </Typography>
                      </Grid>
                      {/* </Box> */}
                      <Grid item xs={12}><Box my={1}><Divider /></Box></Grid>
                      {/* <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}> */}
                      <Grid item xs={3}>
                        <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                          Email
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body1">
                          {/* priyanka@inmail.com */}
                          { user ? userData ? userData.email : user.email !== null ? user.email : "Loading..." : "Loading..." }
                        </Typography>
                      </Grid>
                      {/* </Box> */}
                      <Grid item xs={12}><Box my={1}><Divider /></Box></Grid>
                      {/* <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}> */}
                      <Grid item xs={3}>
                        <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                          Address
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body1">
                          { Math.random() > 0.5 ?
                            "468, Gurudwara Bldg, Dr B A Rd, Dadar (east)"
                            :
                            "698, Dadar East, Dadar, Mumbai, Maharashtra 400014, India"
                          }
                        </Typography>
                      </Grid>
                      {/* </Box> */}
                    </Grid>
                    {/* <Divider /> */}
                  </CardContent>
                </Card>
              </Box>

              <Box my={2}>
                <Typography variant="h6">
                My Subscriptions
                </Typography>
              </Box>
              <Box>
                <Card elevation={5}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={3}>
                        {/* <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}> */}
                        <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                        Package Type
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body1">                          
                          {/* { user ? userData ? userData.displayName : user.displayName !== null ? user.displayName : "Loading..." : "Loading..." } */}
                        Monthly
                        </Typography>
                      </Grid>
                      {/* </Box> */}
                      <Grid item xs={12}><Box my={1}><Divider /></Box></Grid>
                      {/* <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}> */}
                      <Grid item xs={3}>
                        <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                        Price
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body1">
                          {/* { user ? userData ? userData.email : user.email !== null ? user.email : "Loading..." : "Loading..." } */}
                          90 ₹
                        </Typography>
                      </Grid>
                      {/* </Box> */}
                      <Grid item xs={12}><Box my={1}><Divider /></Box></Grid>
                      {/* <Box pt={2} pb={2} sx={{ display: 'grid', rowGap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}> */}
                      <Grid item xs={3}>
                        <Typography gutterBottom variant="body1" style={{ fontWeight: 500 }}>
                        Duration
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body1">
                        4/12/2021 - 5/1/2022 (1 month)
                        </Typography>
                      </Grid>
                      {/* </Box> */}
                    </Grid>
                    {/* <Divider /> */}
                  </CardContent>
                </Card>
              </Box>

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