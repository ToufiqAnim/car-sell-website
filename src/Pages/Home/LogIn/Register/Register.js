import { Alert, Button, CircularProgress, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import Header from '../../../Shared/Header/Header';
import login from '../../../images/login1.jpg';
import regBg from '../../../images/login.jpg';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import useAuth from '../../../../Hooks/useAuth';

const bgRegister = {
    background: `url(${regBg })`,
    height:600
};
const Register = () => {
    const [registerData, setLoginData]= useState({});
     const history = useHistory()
     const {user,registerUser, isLoading,authError} = useAuth() 

    const handleOnBlur = e =>{
         const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        console.log(newRegisterData)

        setLoginData(newRegisterData) 
    }
    const handleLoginSubmit = e =>{
        if(registerData.password !== registerData.password2){
            alert('Your PAssword did not match');
            return
        }
        registerUser(registerData.email, registerData.password, registerData.name, history); 
        
        e.preventDefault()
        
    }
    return (
        <>
        <Header></Header>
        <Container sx={{mt:5}}>
        <Typography variant="h4" gutterBottom sx={{textAlign:'center', fontWeight:'600',color:"#1976d2"}}>CONTACT US</Typography>

            <Grid container >
                <Grid style={bgRegister}  item sx={{ mt: 8, boxShadow:'2' }} xs={12} md={6} >
                    
                   <form onSubmit={handleLoginSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'15%'}}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    < PersonIcon sx={{color:'black'}}/>
                                  </InputAdornment>
                                ),
                              }}
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    < EmailIcon sx={{color:'black'}}/>
                                  </InputAdornment>
                                ),
                              }}
                            name="email"
                            type= "email"
                            onBlur= {handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    < LockIcon sx={{color:'black'}}/>
                                  </InputAdornment>
                                ),
                              }}
                            type="password"
                            onBlur= {handleOnBlur}
                            name="password"                            
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    < LockIcon sx={{color:'black'}}/>
                                  </InputAdornment>
                                ),
                              }}
                            type="password"
                            name="password2"
                            onBlur= {handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text"  sx={{color:'#1976D2', fontWeight:600}}>Already Registered? Please Login</Button>
                            <hr />
                        </NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Your Registration is Successfull</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>} 
                </Grid>
                <Grid item xs={12} md={6} sx={{mt:8}}>
                    <img style={{ width: '100%',height:600 }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default Register;