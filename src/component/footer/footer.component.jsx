import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import './footer.styles.scss';
import { footerList } from './footer';
import { AuthContext } from '../../context/auth';

function Footer() {

  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  // based on whatever page you are in
  const path = pathname === '/' ? 'home' : pathname.substr(1); // substr(1) because you only care what is after '/'
  const [activeItem, setActiveItem] = useState(path);

  return (
    <Box mt={5} pt={2} className="footer-box">
      <Container maxWidth="lg">
        <Grid container style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
          {
            footerList.map(({name, descriptionList}) => (
              <Grid item xs={12} md={3} key={name} >
                <Box mx={2}>
                  <Typography className="footer-title" variant="h6">
                    { name }
                  </Typography>
                  { descriptionList.map(({ label, href }) => (
                    <Box my={1} key={label} className={ ( activeItem === href.substring(1,href.length) ? "current" : (activeItem === label ? "current" : "") )}>
                      <Typography variant="body1" component="a" color="inherit" href={href} className={"footer-description"}>
                        { label }
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Container>
      <Typography variant="body2" color="text.secondary" align="center" >
        {'Copyright © '}
        <Link color="inherit" href="/">
          Ignite
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box> 
  )
}

export default Footer;