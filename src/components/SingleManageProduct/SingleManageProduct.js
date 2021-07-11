import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import './SingleManageProduct.css'

const SingleManageProduct = (props) => {
    const {name, size, price,_id}=props.product;
    console.log(_id)
    const handleDelete=(id)=>{
        fetch(`https://lit-harbor-62507.herokuapp.com/delete/${id}`,{
            method: 'DELETE',
            headers:{'Content-Type': 'application/json'}
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <tr>
            <th scope="row">{"#"}</th>
            <td>{name}</td>
            <td>{size}</td>
            <td>{price}</td>
            <td><FontAwesomeIcon icon={faEdit} /><span className="delete-icon" onClick={()=>handleDelete(`${_id}`)}><FontAwesomeIcon icon={faTrashAlt} /></span></td>
        </tr>
    );
};

export default SingleManageProduct;