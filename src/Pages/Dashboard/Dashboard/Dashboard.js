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
import { Button} from '@mui/material';
import {
  BrowserRouter as Router,
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

const drawerWidth = 200;
function DashBoard(props) {
    const {user, admin,logOut} = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

const drawer = (
    <div>
      <Toolbar />
        
      <Divider />
      
     <Box>
          <Link to={`${url}/pay`} style={{textDecoration:'none' }}>
          <Button  color="inherit" sx={{fontWeight:'600',mx:1 ,color:'#1976d2'}} >Pay</Button>
        </Link> <br /><hr />
          <Link to={`${url}/myOrders`} style={{textDecoration:'none'}}>
          <Button  color="inherit" sx={{fontWeight:'600',mx:2 ,color:'#1976d2'}}>My Orders</Button>
        </Link> <br /><hr />
          <Link to={`${url}/addReview`} style={{textDecoration:'none'}}>
          <Button  color="inherit" sx={{fontWeight:'600',mx:2 ,color:'#1976d2'}}>Add Review</Button>
        </Link> <br /><hr />
         {admin &&<Box>
         <Link to={`${url}/makeAdmin`} style={{textDecoration:'none'}}>
          <Button  color="inherit" sx={{fontWeight:'600',mx:2 ,color:'#1976d2'}}>Make Admin</Button>
        </Link><br /><hr />
        <Link to={`${url}/addCars`} style={{textDecoration:'none'}}>
            <Button  color="inherit" sx={{fontWeight:'600',mx:2 ,color:'#1976d2'}}>Add Cars</Button>
        </Link><br /><hr />
        <Link to={`${url}/manageProducts`} style={{textDecoration:'none'}}>
            <Button  color="inherit" sx={{fontWeight:'600',mx:2 ,color:'#1976d2'}}>Manage Products</Button>
        </Link><hr />

        <Link to={`${url}/manageAllOrders`} style={{textDecoration:'none'}}>
            <Button  color="inherit" sx={{fontWeight:'600' ,color:'#1976d2'}}>Manage All Orders</Button>
        </Link><hr />
         </Box>}
        </Box>
 
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
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
          <NavLink to='/' style={{textDecoration:"none", color:"white", marginRight:20}}>Home</NavLink>
          </Typography>
          <Typography sx={{mr:5}} variant="h6" noWrap component="div">
            DashBoard
          </Typography>
          
          {
             user?.email ?
   
                <Box>
                   <Button onClick={logOut} variant='outlined' sx={{mx:1}} color="inherit" ><LogoutIcon style={{paddingRight:2}}/>Logout</Button>
                 <Button  sx={{mx:1}} color="inherit" ><PersonIcon style={{paddingRight:2}}/>{user.displayName}</Button>
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