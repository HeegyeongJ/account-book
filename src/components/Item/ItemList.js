import React, { useState } from 'react';
import './ItemList.css';
import Item from './Item';


const ItemList = ({ items }) => {
    const [selectedType, setSelectedType] = useState();
    const [selectedOrder, setSelectedOrder] = useState();
    const [selectedPeriod, setSelectedPeriod] = useState();
    const [filteredItems, setFilteredItems] = useState(items);

    


    return (
        <>
            <ItemFilter />
            <div className='list'>

                {items && [...items].reverse().map((item) => {
                    return <Item
                        key={item.date}
                        name={item.name}
                        cost={item.cost}
                        date={item.date}
                        type={item.type}
                        memo={item.memo}
                        buyIntention={item.buyIntention}
                    />
                })}
            </div>
        </>
    );
};

export default ItemList;