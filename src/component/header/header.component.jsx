import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Hidden from '@mui/material/Hidden';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./header.styles.scss";
import ProfilePicture from '../../asset/images/woman.png';
import Awareness from '../../asset/images/awareness.svg';
import { headersData } from './header';
import { signOut } from "firebase/auth";
import { auth } from '../../util/firebase';
import { AuthContext } from '../../context/auth';

function Header() {

  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  // based on whatever page you are in
  const path = pathname === '/' ? 'home' : pathname.substr(1); // substr(1) because you only care what is after '/'
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e) => setActiveItem(e.currentTarget.name);

  const [state, setState] = useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="drawer"
    >
      <Toolbar className="drawer-title">{"<logo>"} Ignite</Toolbar>
      <Divider />
      <List>
        {headersData.map(({ label, href }) => {
          return (
           // {/* <ListItem className={"drawer-header"} sx={{ textTransform:'capitalize', backgroundColor: (( activeItem === href.substring(1,href.length) ? "pink" : (activeItem === label ? "pink" : ""))) }} button key={label} component="a" href={href} > */}
            <ListItem className={"drawer-header " + ( activeItem === href.substring(1,href.length) ? "current" : (activeItem === label ? "current" : "") )} button key={label} component="a" href={href} >
              {/* <ListItemIcon>
                {2 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          )
        })}
      </List>
    </Box>
  );

  const handleSignOut = (e) => {
    signOut(auth).then((d) => {
      console.log("sign out successfully: ")
      
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    logout(e);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* =============== DRAWER =============== */}
          <Box sx={{ display: { 'xs' : 'block', 'md': 'none'}}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon  />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              { list("left") }
            </SwipeableDrawer>
          </Box>
          {/* =============== DRAWER =============== */} 

          {/* =============== TITLE =============== */}
          <Box >          
            <Button className="title" component="a" href="/" variant="h6" startIcon={<IconButton className="title"><img style={{ width: "24px" }} src={Awareness} alt="..." /></IconButton>}>
              Ignite
            </Button>
          </Box>
          
          {/* =============== WEBSITE VIEW =============== */}
          <Box sx={{ display: { 'xs' : 'none', 'md': 'block'} }}>
            {
              headersData.map(({ label, href, target }) => {
                return (
                  <Button
                    className={"header-button " + ( activeItem === href.substring(1,href.length) ? "current" : (activeItem === label ? "current" : "") )}
                    {...{
                      key: label,
                      color: "inherit",
                      href: href,
                      component: "a",
                    }}
                    onClick={ !target ? handleItemClick : ''}
                    target={ target ? "_blank" : ""}
                  >
                    { label }
                  </Button>
                );
              })
            }
          </Box>
          {/* =============== END OF WEBSITE VIEW =============== */}


          {/* =============== LOGIN / REGISTER =============== */}
          <Box>
            { !user ?
              <>
                <Hidden mdDown={path === "login" ? true : false}>
                  <Button className={"header-button " + ( activeItem === "login" ? "current" : "" ) } color="inherit" component="a" href="/login">
                    Login
                  </Button>
                </Hidden>
                <Hidden mdDown={(path === "register" || pathname === "/") ? true : false}>
                  <Button className={"header-button " + ( activeItem === "register" ? "current" : "" ) } color="inherit" component="a" href="/register">
                    Register
                  </Button>
                </Hidden>
              </>
              :
              <>
                {/* <Button className="signOut" color="inherit" onClick={ handleSignOut } href={`/`}>Sign out</Button> */}
                <Stack direction="row" spacing={2}>
                  <Button 
                    color="inherit" 
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined} 
                    onClick={handleClick}
                  >
                    Profile <Avatar alt="P" src={ ProfilePicture } />
                  </Button>
                </Stack>
                
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem  component="a" onClick={handleClose} href={`/profile`}>Profile</MenuItem>
                  <MenuItem component="a" onClick={handleSignOut} href={`/`}>Logout</MenuItem>
                </Menu>
              </>
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;