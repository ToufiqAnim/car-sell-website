import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import  {NavLink, Link}  from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import CarDetails from '../../CarDetails/CarDetails';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{backgroundColor:'#010f1e'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography variant="h4" component="div" sx={{ flexGrow: 1,textAlign:'center'}}>
              <Link to="/" style={{textDecoration:'none', color:'white'}}>Highline Motors</Link>
            </Typography>
            
            <Link to="/inventory" style={{textDecoration:'none', color:'white' }}>
            <Button color="inherit" style={{fontWeight:'bold'}}>Inventory</Button>
            </Link>
            
            {user?.email ?
            <Box>
            <NavLink to="/dashboard" style={{textDecoration:'none', color:'white'}}>
             <Button color="inherit" style={{fontWeight:'bold'}}>DashBoard</Button>
             </NavLink>
             <Button onClick={logOut} color="inherit">Logout</Button>
             <Button  color="inherit">
            {user.displayName}
          </Button>
             </Box>
            :
             <NavLink to="/login" style={{textDecoration:'none', color:'white'}}>
             <Button color="inherit" style={{fontWeight:'bold'}}>Login</Button>
             </NavLink>}
        
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Header;