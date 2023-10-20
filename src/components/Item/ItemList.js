import React, { useEffect, useState } from 'react';
import './ItemList.css';
import Item from './Item';
import ItemFilter from './ItemFilter';


const ItemList = ({ items }) => {

  useEffect(() => {
    console.log(filtered)
  }, [])

  let filtered = [...items]

  const handleFilterChange = (filterOptions) => {
    if (filterOptions.typeFilter !== 'all') {
      return filtered.filter(item => item.type === filterOptions.typeFilter)
    }
    if (filterOptions.startDate) {
      return filtered.filter(item => new Date(item.date) >= new Date(filterOptions.startDate))
    }
    if (filterOptions.endDate) {
      return filtered.filter(item => new Date(item.date) <= new Date(filterOptions.endDate))
    }


    if (filterOptions.sortFilter === 'highPrice') {
      return filtered.sort((a, b) => a.cost - b.cost);
    } else if (filterOptions.sortFilter === 'lowPrice') {
      return filtered.sort((a, b) => b.cost - a.cost);
    } else if (filterOptions.sortFilter === 'outdated') {
      return filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
    }

  }


  return (
    <>
      <ItemFilter onFilterChange={handleFilterChange} />
      <div className='list'>
        {filtered && filtered.map((item) => {
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