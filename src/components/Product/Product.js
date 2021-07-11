import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Product.css'
const Product = (props) => {
    const {name, price,size,imageURL,_id}=props.product;
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    const handleBuyNow = ()=>{
        if(loggedInUser){
            const order= {...loggedInUser,name:name,price:price,size:size,image:imageURL}
            fetch('https://lit-harbor-62507.herokuapp.com/addOrder',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(order)
            })
            console.log(order)
        }
    }
    return (
        <div className="col-md-4 col-sm-6">
            <div>
                <div className="product-image-title">
                    <img src={imageURL} alt="" />
                    <h5>{name}</h5>
                </div>
                <div className=" d-flex justify-content-between product-price-buy-now-btn">
                    <h4><span>BDT: </span>{price}</h4>
                    <Link to="orders"><button onClick={()=>handleBuyNow(_id)}>Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};
export default Product;