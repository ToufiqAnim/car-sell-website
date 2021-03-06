import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography'
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link, NavLink } from 'react-router-dom';
import { Button, List} from '@mui/material';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';

import MakeAdmin from '../MakeAdmin/MakeAdmin';

import ManageProducts from '../ManageProduces/ManageProducts';
import AddCars from '../AddCars/AddCars';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddReview from '../AddReview/AddReview';
import './Dashboard.css';

const drawerWidth = 250;
function DashBoard(props) {
    const {user, admin,logOut} = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

const drawer = (
    <div  style={{background:'#010f1e'}}>
      <Toolbar sx={{borderBottom:1, color:'gray' , py:3}}>
        <Typography variant="h5" color="white" sx={{fontWeight:'bold'}}>
        Highline Motor
        </Typography>
      
      </Toolbar>
      
      <Divider />
      
     <List  style={{color:'white', height:"90vh"}} >
         <Box className='sidebar-list'>
         <Link to={`${url}/pay`} style={{textDecoration:'none', paddingBottom:10 }}> 
          <Button  color="inherit" sx={{fontWeight:'600',mx:2, color:'white'}} ><LocalAtmIcon sx={{mr:1}}/>  Pay</Button>
        </Link> 
          <Link to={`${url}/myOrders`} style={{textDecoration:'none', paddingBottom:10}}>
          <Button  color="inherit" sx={{fontWeight:'600',mx:2 ,color:'white'}}><BookmarkBorderIcon sx={{mr:1}}/> My Orders</Button>
        </Link> 
          <Link to={`${url}/addReview`} style={{textDecoration:'none', paddingBottom:10}}>
          <Button  color="inherit" sx={{fontWeight:'600',mx:2 ,color:'white'}}><ReviewsIcon sx={{mr:1}}/>Add Review</Button>
        </Link> 
         </Box>
         <Divider />
        {/*  {admin &&  */}
        <Toolbar sx={{borderBottom:1, color:'gray' }}>
        <Typography variant="h5" color="white" sx={{fontWeight:'bold'}}>
        Admin Panel
        </Typography>
      
      </Toolbar>
        <Box className='sidebar-list'>
         <Link to={`${url}/makeAdmin`} style={{textDecoration:'none', paddingBottom:10, marginTop:10}}>
          <Button  color="inherit" sx={{fontWeight:'600',mx:2 ,color:'white'}}><AdminPanelSettingsIcon sx={{mr:1}} />Make Admin</Button>
        </Link>
        <Link to={`${url}/addCars`} style={{textDecoration:'none', paddingBottom:10}}>
            <Button  color="inherit" sx={{fontWeight:'600',mx:2 ,color:'white'}}><AddBoxIcon sx={{mr:1}}/>Add Cars</Button>
        </Link>
        <Link to={`${url}/manageProducts`} style={{textDecoration:'none', paddingBottom:10}}>
         <Button  color="inherit" sx={{fontWeight:'600',mx:2 ,color:'white'}}> <ProductionQuantityLimitsIcon sx={{mr:1}} />  Manage Products</Button>
        </Link>

        <Link to={`${url}/manageAllOrders`} style={{textDecoration:'none', paddingBottom:10}}>
            <Button  color="inherit" sx={{fontWeight:'600' ,color:'white',mx:2}}><CollectionsBookmarkIcon sx={{mr:1}} /> Manage All Orders</Button>
        </Link>
         </Box>
        </List>
 
     

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex'}} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{backgroundColor:'white', color:'black', py:3}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <NavLink to='/' style={{textDecoration:"none", color:"black", background:'none', marginRight:20}}>Home</NavLink>
          </Typography>
          <Typography sx={{mr:5}} variant="h6" noWrap component="div">
            DashBoard
          </Typography>
          
          {
             user?.email ?
   
                <Box>
                   <Button onClick={logOut} variant='outlined' sx={{mx:1}} color="inherit" ><LogoutIcon style={{paddingBottomRight:2}}/>Logout</Button>
                 <Button  sx={{mx:1}} color="inherit" ><PersonIcon style={{paddingBottomRight:2}}/>{user.displayName}</Button>
                </Box>
               

             :
             <NavLink to="/login" style={{textDecoration:'none', color:'white'}}>
             <Button color="inherit">Login</Button>
             </NavLink>
           }
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <Pay></Pay>
        </Route>
         <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
         <Route path={`${path}/myOrders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/addReview`}>
          <AddReview></AddReview>
        </Route> 
        <Route path={`${path}/addCars`}>
          <AddCars></AddCars>
        </Route> 
        
       <Route path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </Route> 
        <Route path={`${path}/manageAllOrders`}>
          <ManageAllOrders></ManageAllOrders>
        </Route> 
      </Switch>         

      </Box>
    </Box>
    </>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;