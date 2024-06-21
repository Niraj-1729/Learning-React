import React from 'react';
import productDate from './productDate';
import './productItem.css';

const productItem=(props)=>{
    return (
        <card className='product-item'>
            <productDate date={props.date}/>
            <div className='product-item__description'>
                <h2>{props.title}</h2>
            </div>
        </card>
    );
}

export default productItem;
