import React from 'react';

function Goods(props){
    return (
        <div className='col s12'>
            <div className='card #80d8ff light-blue accent-1'>
                <h5> Sporting Goods</h5>
            </div>
            <div>
                <span className='col s6'>
                <div className='card red'>
                    Baseball
                    </div>
                </span>
                <span className='col s6'>
                <div className='card red'>
                    $9.99
                    </div>
                </span>
            </div>
            <div>
                <span className='col s6'>
                <div className='card red'>
                    Basketball
                    </div>
                </span>
                <span className='col s6'>
                <div className='card red'>
                    $29.99
                    </div>
                </span>
            </div>
            <div>
                <span className='col s6'>
                <div className='card red'>
                    Football
                    </div>
                </span>
                <span className='col s6'>
                <div className='card red'>
                    $49.99
                    </div>
                </span>
            </div>
            <div className='col s12'>
                <div className='card #80d8ff light-blue accent-1'>
                <h5> Electronic Goods</h5>
                </div>
            </div>
            <div>
                <span className='col s6'>
                    <div className='card red'>
                    iPod Touch
                    </div>
                </span>
                <span className='col s6'>
                    <div className='card red'>
                    $99.99
                    </div>
                </span>
            </div>
            <div>
                <span className='col s6'>
                <div className='card red'>
                    iPhone XR
                </div>
                </span>
                <span className='col s6'>
                <div className='card red'>
                    $699.99
                    </div>
                </span>
            </div>
            <div>
                <span className='col s6'>
                <div className='card red'>
                    Galaxy Note10
                    </div>
                </span>
                <span className='col s6'>
                <div className='card red'>
                    $999.99
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Goods;