import React, { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { auth, googleProvider, FacebookProvider, TwitterProvider, db } from '../../util/firebase';
import { setDoc, getDoc, doc } from "firebase/firestore";
import { AuthContext } from '../../context/auth';

import './login.styles.scss';
import Google from '../../asset/images/google.svg';
import Facebook from '../../asset/images/facebook.svg';
import Twitter from '../../asset/images/twitter.svg';

const theme = createTheme();

function Login() {

  const context = useContext(AuthContext); // Holds the LOGIN or LOGOUT
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    const variable = e.target.name;
    const value = e.target.value;
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    
    if (variable === "email") {
      if (!value.match(regEx)) {
        setErrors({ ...errors, email: 'Must be a valid email address' });
      } else {
        delete errors["email"]
        setEmail(value);
      }
    }
    else if (variable === "password") {
      if(value.length < 6) {
        setErrors({ ...errors, password: 'Minimum of 6 characters' });
      } else {
        delete errors["password"]
        setPassword(value)
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget); // store all form data
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in 
        const docRef = doc(db, "users", email);
        const docSnap = await getDoc(docRef);
        var name = '';
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          name = docSnap.data().displayName;
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        const user = { ...userCredential.user, displayName: name };
        // const token = "V$wrVbDBz,7m:y73<D={Fz!d3CVe@S";
        context.login(user, email);
        // setDoc(doc(db, "users", user.uid), {
        //   displayName: user.displayName,
        //   email: user.email,
        //   photoURL: user.photoURL,
        //   createdAt: new Date()
        // });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(errorCode)
        switch (errorCode) {
          case 'auth/user-not-found':
            setErrors({ ...errors, email: "This email is not registered with us."})
            break;
          case 'auth/email-already-in-use':
            setErrors({ ...errors, email: "Email already registered. Try login?"})
            break;
          // case 'auth/invalid-email':
          //   console.log(`Email address ${this.state.email} is invalid.`);
          //   break;
          case 'auth/operation-not-allowed':
            console.log(`Error during sign up.`);
            break;
          // case 'auth/weak-password':
          //   console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
          //   break;
          case 'auth/wrong-password':
            setErrors({ ...errors, password: "Incorrect password" });
            break;
          case 'auth/too-many-requests':
            setErrors({ ...errors, firebase: "Too many wrong attempts. Please try again later."})
            break;
          default:
            console.log(error.message);
            break;
        }
      });
  };

  const handleGoogle = (e) => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      context.login(user, user.displayName);
      setDoc(doc(db, "users", user.displayName), {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: new Date()
      });
      // ...
    }).catch((error) => {
      console.log(error)
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  const handleFacebook = (e) => {
    signInWithPopup(auth, FacebookProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const credential = FacebookAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      context.login(user, user.displayName);
      setDoc(doc(db, "users", user.displayName), {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: new Date()
      });
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = FacebookAuthProvider.credentialFromError(error);
      console.log(error)
      // ...
    });
  }

  const handleTwitter = (e) => {
    signInWithPopup(auth, TwitterProvider)
    .then((result) => {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      // const credential = TwitterAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // const secret = credential.secret;

      // The signed-in user info.
      const user = result.user;
      context.login(user, user.displayName);
      setDoc(doc(db, "users", user.displayName), {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: new Date()
      });
      // ...
    }).catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = TwitterAuthProvider.credentialFromError(error);
      // ...
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ backgroundColor: 'rgb(255, 245, 248)'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box className="sign-up-box" mb={2}>
            <Typography component="h1" variant="h4" className="sign-up-title">
              LOGIN
            </Typography>
          </Box>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2">
                Not a member yet? &nbsp;
                <Link href="/register" variant="body2">
                  Register here
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleOnChange}
                  error={ errors.email ? true : false }
                  helperText={ errors.email ? `${errors.email}` : "" }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleOnChange}
                  error={ errors.password ? true : false }
                  helperText={ errors.password ? `${errors.password}` : "" }
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={ Object.keys(errors).length !== 0 ? true : false }
            >
              login
            </Button>

            <Divider> OR </Divider>

            <Button onClick={ handleGoogle }
              className="google"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              startIcon={<Icon style={{ display: 'flex', alignItems: "center" }}><img src={Google} alt="Google" className="google-icon" /></Icon>}
            > Sign in with Google</Button>

            <Button onClick={ handleFacebook } 
              className="facebook"
              fullWidth
              variant="contained"
              sx={{ mb: 2 }} 
              startIcon={<Icon style={{ display: 'flex', alignItems: "center" }} ><img src={Facebook} alt="Facebook" className="facebook-icon" /></Icon>}
            >Sign in with Facebook</Button>  

            <Button onClick={ handleTwitter } 
              className="twitter"
              fullWidth
              variant="contained"
              sx={{ mb: 2 }} 
              startIcon={<Icon sx={{ display: 'flex', alignItems: "center" }} ><img src={Twitter} alt="Twitter" className="twitter-icon" /></Icon>}
            >Sign in with Twitter</Button>            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;