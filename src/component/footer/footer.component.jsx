import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import './footer.styles.scss';
import { footerList } from './footer';

function Footer() {

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
                    <Box my={1} key={label}>
                      <Typography variant="body1" component="a" color="inherit" href={href} className="footer-description">
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