import React from 'react';

const SingleOrder = (props) => {
    const {name, price, size}=props.product
    return (
             <tr>
                <th scope="row">1</th>
                <td>{name}</td>
                <td>{size}</td>
                <td>{price}</td>
            </tr>
    );
};

export default SingleOrder;