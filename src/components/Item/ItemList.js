import React from 'react';
import './ItemList.css';
import Item from './Item';


const ItemList = ({ items }) => {

  return (
    <>
      <div className='list'>
        {items && items.map((item) => {
          return <Item
            key={item.id}
            name={item.name}
            cost={item.cost}
            date={item.date}
            type={item.type}
            memo={item.memo}
            buyIntention={item.buyIntention}
          ></Item>
        })}
      </div>
    </>
  );
};

export default ItemList;