import React from 'react';

function Goods(props){
    return (
        <div className='col s12'>
            <div>
                <h5> Sporting Goods</h5>
            </div>
            <div>
                <span className='col s6'>
                    Baseball
                </span>
                <span className='col s6'>
                    $9.99
                </span>
            </div>
            <div>
                <span className='col s6'>
                    Basketball
                </span>
                <span className='col s6'>
                    $29.99
                </span>
            </div>
            <div>
                <span className='col s6'>
                    Football
                </span>
                <span className='col s6'>
                    $49.99
                </span>
            </div>
        </div>
    )
}

export default Goods;