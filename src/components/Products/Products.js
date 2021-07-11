import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch('https://lit-harbor-62507.herokuapp.com/getProducts')
        .then(response => response.json())
        .then(data=>setProducts(data))
        console.log(products)
    },[])
    return (
        <div>
            <div className="row">
                {
                    products.map(product=><Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;