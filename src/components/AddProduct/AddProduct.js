import React, { useState } from 'react';
import './AddProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt, faPlus, faTasks, faTools } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [productData, setProductData]= useState({})

    function handleImageUpload(event){
        const imageData1 = new FormData()
        imageData1.set('key','33c377fd37e58bc7a5e555fb2397afce')
        imageData1.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',imageData1)
          .then(function (response) {
            console.log(response.data.data.display_url);
            const newProduct = {...productData}
            newProduct.imageURL = response.data.data.display_url
            setProductData(newProduct);
            console.log(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const onSubmit=(data)=>{
            let finalProductData = {...data,...productData}
            console.log(finalProductData)
            fetch('https://lit-harbor-62507.herokuapp.com/addProduct',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(finalProductData)
            })   
            .then(result=>{
                console.log(result);                
            })
            .then(err=>{
                console.log(err)
            })
            setProductData({});
            const deleteFinalProduct = {};
            finalProductData = deleteFinalProduct; 
    };

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
                <div className="content-item">
                <h4>Add Product</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       <div className="form-container">
                            <div className="product-input-field-1">
                                <label htmlFor="pName">Product Name</label>
                                <input type="text" placeholder="Enter Name"{...register("name" )} id="pName" />
                                <label htmlFor="size">Size</label>
                                <input type="text" placeholder="Enter Size"{...register("size" )} id="size" />
                            </div>
                            <div className="product-input-field-2">
                                <label htmlFor="price">Add Price</label>
                                <input type="number" placeholder="Enter Price" {...register("price")} id="price" />
                                <label id="add-photo" htmlFor="#">Add Photo</label>
                                <label htmlFor="photo"><span className="upload-file"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Photo</span> <input type="file" onChange={handleImageUpload} id="photo" style={{visibility:"hidden"}}/> </label>
                            </div>
                       </div>
                        <div className="save-button">
                            <button onClick={handleSubmit(onSubmit)} >Save</button>
                        </div>
                    </form>
                </div>
            </div>
         </div>
    );
};

export default AddProduct;