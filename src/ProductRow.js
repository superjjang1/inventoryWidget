import React from 'react';


function ProductRow(props) {
    let productClass="";
    let fontStyle ={};
    if (!props.product.inStock){
        productClass= "text-danger"
        fontStyle={
            fontWeight: "bold",
            border: "1px blue solid"
        }
    }
    return (
        
        <tr>
            <td style={fontStyle} className={productClass}>{props.product.name}</td>
            <td style={fontStyle} className={productClass}>{props.product.price}</td>
        </tr>
    
    )
}

export default ProductRow;