import React from 'react';
import './ItemList.css';

const ItemList = ({items}) => {
    return (
        <div className='list'>
            {items && items.map((item)=> {
                return <p>{item.name}</p>
            })}
        </div>
    );
};

export default ItemList;