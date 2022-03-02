import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import  {NavLink, Link, useLocation}  from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './Header.css'
import { Container } from '@mui/material';
 
const Header = ({toggle}) => {
    const {user, logOut} = useAuth();
    const [navBg, setNavBg] = useState('transparent');
    const location = useLocation();

    useEffect(() =>{
      if (window.location.pathname === "/") {
        setNavBg('rgba(0,0,0,.3)');
      } else {
        setNavBg("#222732")
      }
    },[location])
  
    return (
        <Box sx={{ flexGrow: 1}}>
        
        <AppBar position="fixed"  elevation={0} style={{ backgroundColor: navBg }}>
        <Container maxWidth="xl">  
          <Toolbar sx={{ py:2}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography variant="h4" component="div" sx={{ flexGrow: 1}}> 
              <Link to="/" style={{textDecoration:'none', color:'white', fontWeight:'bold'}} className="nav-brand">Highline Motors</Link>
            </Typography>
            
            <Typography className="nav-text" color="inherit" style={{fontWeight:'bold', fontSize:'1rem', background:'transparent'}}>
              <Link to="/inventory" style={{textDecoration:'none', color:'white' }}>
            INVENTORY
            </Link>
            </Typography>
            
            
            {user?.email ?
            <Box>
            <NavLink className="nav-text" to="/dashboard" style={{textDecoration:'none', fontWeight:'bold',fontSize:'1rem', color:'white', marginLeft:10}}>
            DASHBOARD
             </NavLink>
             <Button className="nav-text" onClick={logOut}  style={{fontSize:'1rem', color:'white', fontWeight:'bold'}}>Logout</Button>
             <Button  color="inherit">
            {user.displayName}
          </Button>
             </Box>
            :
            
              <NavLink  to="/login" style={{textDecoration:'none'}} className='nav-text' >
             <Typography style={{fontWeight:'bold', color:'white' ,fontSize:'1rem', marginLeft:10}}>
             LOGIN  
             </Typography>
             </NavLink>
           
             }
        
          </Toolbar>
          </Container>
        </AppBar>
        
      </Box>
    );
};

export default Header;