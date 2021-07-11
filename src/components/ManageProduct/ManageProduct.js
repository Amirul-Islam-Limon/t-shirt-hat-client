import React, { useEffect, useState } from 'react';
import './ManageProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt, faPlus, faTasks, faTools } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';
import SingleManageProduct from '../SingleManageProduct/SingleManageProduct';

const ManageProduct = () => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch('https://lit-harbor-62507.herokuapp.com/getProducts')
        .then(response => response.json())
        .then(data=>setProducts(data))
        console.log(products)
    },[])
    return (
        <div className="dashboard">
            <div className="menu">
                <h1>T-Shirt Hat</h1>
                <div className="menu-item">
                    <Link to="/manage-product"><h5><FontAwesomeIcon icon={faTasks} /> Manage Product</h5></Link>

                    <Link to="/add-product"><h5><FontAwesomeIcon icon={faPlus} /> Add Product</h5></Link>
                    
                    <Link><h5><FontAwesomeIcon icon={faTools} /> Edit Product</h5></Link>
                </div>
            </div>
            <div className="content">
                <h2>Manage Products</h2>
                <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Size</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <SingleManageProduct key={product._id} product={product}></SingleManageProduct>)
                    }
                </tbody>
  
                </table>
            </div>
         </div>
    );
};

export default ManageProduct;