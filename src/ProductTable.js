import React, { Component } from 'react';
import productData from'./data';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRows';
console.log(productData);



function ProductTable(props){
    let tempProducts = {};
    const products = productData.data.forEach((product,i)=> {
        // run some quick code to see if this is a new category
        if(tempProducts[product.category] === undefined){
            tempProducts[product.category]= [];
        }
        tempProducts[product.category].push(product);

        return (
            <ProductRow key={i} product= {product}/>
        )
    });
    console.log(tempProducts);
    let rows = [];
    //we need 2 loops. outside loop, loops through categories.
    //i.e., sporting goods and electronics, will run as many times as their are categories
    for(let key in tempProducts){
        console.log(key);
        rows.push(<ProductCategoryRow header={key}/>)  //push rthe productCategoryRow onto rows.red//map through allitems on thistype (i.e. sportinggoods)
        tempProducts[key].forEach((product)=>{
            rows.push(<ProductRow product={product}/>) //push this element on the rows.
        })
    }

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
        {rows}

            </tbody>
        </table>
        </div>
    )
}










export default ProductTable;