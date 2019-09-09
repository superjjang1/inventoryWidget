import React, { Component } from 'react';
import productData from'./data';
import ProductRow from './ProductRow';
console.log(productData);



function ProductTable(props){
    const products = productData.data.map((product,i)=> {
        return (
            <ProductRow key={i} product= {product}/>
        )
    });
    return(
        <div className='product-table red'>
        <table className='table table-stripe'>
            <thead>
                <tr>
                    <th>Name check</th>
                    <th>Price check</th>
                </tr>
            </thead>
            <tbody>
        {products}

            </tbody>
        </table>
        </div>
    )
}










export default ProductTable;