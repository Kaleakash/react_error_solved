import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink as Link } from "react-router-dom";
import HomePage from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const VerificationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}

  const handleLogin = () => {
    // Perform your validation here, e.g.:
    if (email === 'user@example.com' && password === 'password') 
    {
      // // Redirect to the home page
      // <Router>
      //   <Routes>
      //     <Route path="home" element={HomePage}/>
      //   </Routes>
      // </Router>
      // console.log(email)
      navigate("/home")
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label='Username'
          placeholder='Enter username'
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='Password'
          placeholder='Enter password'
          type='password'
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type='submit'
          color='primary'
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleLogin}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#" >
            Forgot password?
          </Link>
        </Typography>
        <Typography> Do you have an account?
          <Link href="#">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VerificationPage;
