import './App.css';
import Dashboard from './components/AddProduct/AddProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import { createContext, useState } from 'react';
import Orders from './components/Orders/Orders';
import ManageProduct from './components/ManageProduct/ManageProduct';
import AddProduct from './components/AddProduct/AddProduct';
import Deals from './components/Deals/Deals';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser]=useState()
  return (
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
          <Switch>
            <Route exact path="/">
            <Home />
            <Products/>
            </Route>
            <Route path="/home">
              <Home />
              <Products/>
            </Route>
            <PrivateRoute path="/admin">
              <Home/>
              <Admin/>
            </PrivateRoute>
            <PrivateRoute path="/add-product">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path="/manage-product">
              <ManageProduct/>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders/>
            </PrivateRoute>
            <Route path="/login">
              <Home/>
              <Login></Login>
            </Route>
            <Route path="/deals">
              <Deals></Deals>
            </Route>
            </Switch>
        </Router>
     </UserContext.Provider>
  );
}
export default App;
