import './Orders.css'
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SingleOrder from '../SingleOrder/SingleOrder';

const Orders = () => {
    const [orderedData, setOrderedData] = useState([])
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    useEffect(()=>{
        fetch(`https://lit-harbor-62507.herokuapp.com/getOrders?email=${loggedInUser?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setOrderedData(data);
        })
    },[])
    console.log(loggedInUser)
    return (
        <div className="container">
            <h1 className="checkout">Checkout</h1>
            <h3>Hello, {loggedInUser.displayName}.Thank you very much for your purchase.</h3><br />
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Size</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
            <tbody>
                {
                    orderedData.map(product=> <SingleOrder product={product}></SingleOrder>)
                }
            </tbody>
        </table>
            
        </div>
    );
};

export default Orders;