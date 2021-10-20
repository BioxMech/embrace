import React, { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AuthContext } from '../../context/auth';
import { auth, db } from '../../util/firebase';
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import './register.styles.scss';

const theme = createTheme();

function Register() {

  const context = useContext(AuthContext); // Holds the LOGIN or LOGOUT

  async function checkDB() {
    const docRef = doc(db, "trackers", localStorage.getItem("token"));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      console.log("Welcome!")
    } else {
      // doc.data() will be undefined in this case
      console.log("No such tracker!");
      setDoc(doc(db, "trackers", localStorage.getItem("token")), {
        bloodLevel: null,
        mood: null,
        pain: null,
        date: null
      });
    }
  }

  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length >= 6 && password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => { 
          // Signed in 
          const user = { ...userCredential.user, displayName: name };
          // const token = 'V$wrVbDBz,7m:y73<D={Fz!d3CVe@S';
          context.login(user, name);
          await setDoc(doc(db, "users", name), {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            createdAt: new Date()
          });
          checkDB();
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          console.log(errorCode)
          switch (errorCode) {
            case 'auth/email-already-in-use':
              setErrors({ ...errors, email: `Email already registered.`})
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
            default:
              console.log(error.message);
              break;
          }
          // ..
        });
    } else {
      errors.password = "error";
      console.log(errors)
    }
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleOnChange = async (e) => {
    const variable = e.target.name;
    const value = e.target.value;
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    
    if (variable === "name") {
      // const nameRegex = /^[a-zA-Z]+$/;
      const nameRegex = /^[a-z ,.'-]+$/i;
      if (!value.match(nameRegex)) {
        setErrors({ ...errors, name: "Invalid name" })
      } else {
        const docRef = doc(db, "users", value);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // console.log("Document data:", docSnap.data());
          setDisabledSubmit(true)
          setErrors({ ...errors, name: "Invalid name" })
        } else {
          // doc.data() will be undefined in this case
          setDisabledSubmit(false);
        }
        delete errors["name"];
        setName(value);
      }
    }
    else if (variable === "email") {
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
    else if (variable === "confirmPassword") {
      if (value !== password) {
        setErrors({ ...errors, confirmPassword: 'Confirm password does not match with your password' });
      } else {
        delete errors["confirmPassword"];
        setConfirmPassword(value)
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" style={{ textAlign: 'center' }}>
        <Box my={3}>
          <Typography variant="h6">
            Register for free to access a seamless period tracking experience.
          </Typography>
        </Box>
      </Container>
      <Container component="main" maxWidth="xs" sx={{ backgroundColor: 'rgb(255, 245, 248)'}}>
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            marginBottom: 6,
            paddingTop: 2,
            paddingBottom: 2,
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
              SIGN UP
            </Typography>
          </Box>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/login" variant="body2">
                Already a member?
              </Link>
            </Grid>
          </Grid>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={handleOnChange}
                  error={ errors.name ? true : false }
                  helperText={ errors.name ? `${errors.name}` : "Your first name" }
                />
              </Grid>
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
                  helperText={ errors.email ? `${errors.email}` : "Working email address" }
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
                  helperText={ errors.password ? `${errors.password}` : "Minimum 6 characters" }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirm-new-password"
                  onChange={handleOnChange}
                  error={ errors.confirmPassword ? true : false }
                  helperText={ errors.confirmPassword ? `${errors.confirmPassword}` : "To confirm your password" }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree to the Terms & Condition that we will utilize the data as necessary"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={ Object.keys(errors).length !== 0 || disabledSubmit ? true : false }
            >
              Sign Up
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;