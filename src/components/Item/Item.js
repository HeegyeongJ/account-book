import React from 'react';
import './Item.css'

const Item = (props) => {
    return (
        <div className='item'>
            <p className='item-name'>{props.name}</p>
            <p className='item-cost'>{props.cost}</p>
            <p className='item-type'>{props.type}</p>
            <p className='item-date'>{props.date}</p>
            <p className='item-memo'>{props.memo}</p>
            <p className='item-intention'>{props.buyIntention}</p>
        </div>
    );
};

export default Item;