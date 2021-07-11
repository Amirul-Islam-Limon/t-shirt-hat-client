import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Home.css'

const Home = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    return (
        <div className="home">
            <div className="container d-flex justify-content-between">
                <div className="site-name">
                    <h1>T-Shirt Hat</h1>
                </div>
                <div className="nav-menu">
                    <nav className="">
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="orders">Orders</Link></li>
                        <li><Link to="add-product">Admin</Link></li>
                        <li><Link to="deals">Deals</Link></li>
                        <li className="home-button"><Link to="login">{loggedInUser?"Log Out":"Log In"}</Link></li>
                    </nav>
                </div>
            </div>
            <div className="search-bar">
                <input placeholder="Search here" type="text" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Home;