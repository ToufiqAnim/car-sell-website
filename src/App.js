
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Inventory from './Pages/Home/Inventory/Inventory';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/Home/LogIn/LogIn/LogIn';
import Register from './Pages/Home/LogIn/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Home/LogIn/PrivateRoute/PrivateRoute';
import CarDetails from './Pages/CarDetails/CarDetails';
import DashBoard from './Pages/Dashboard/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <PrivateRoute path='/carDetails/:carId'>
            <CarDetails></CarDetails>
          </PrivateRoute>
          
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/dashboard">
            <DashBoard></DashBoard>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
        
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
