import React, { useState } from 'react';

const ItemFilter = ({ items, onFilterChange }) => {
    const [typeFilter, setTypeFilter] = useState('all');
    const [sortFilter, setSortFilter] = useState('updated');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleFilter = () => {
        let filtered = [...items]
        if (typeFilter !== 'all') {
            filtered = filtered.filter(item => item.type === typeFilter)
        }
        if (startDate) {
            filtered = filtered.filter(item => new Date(item.date) >= new Date(startDate))
        }
        if (endDate) {
            filtered = filtered.filter(item => new Date(item.date) <= new Date(endDate))
        }


        if (sortFilter === 'highPrice') {
            filtered = filtered.sort((a, b) => b.cost - a.cost);
        } else if (sortFilter === 'lowPrice') {
            filtered = filtered.sort((a, b) => a.cost - b.cost);
        } else if (sortFilter === 'outdated') {
            filtered = filtered.sort((a, b) => new Date(a.date) - new Date(b.date))
        }
        onFilterChange(filtered);
    }

    return (
        <div>
            <select name='typeFilter' onChange={(e) => { setTypeFilter(e.target.value) }}>
                <option value='all'>유형 필터</option>
                <option value='식료품'>식료품</option>
                <option value='의류'>의류</option>
                <option value='교통비'>교통비</option>
                <option value='건강'>건강</option>
                <option value='여가비'>여가비</option>
            </select>
            <select name='sortFilter' onChange={(e) => { setSortFilter(e.target.value) }}>
                <option value='updated'>정렬 기준</option>
                <option value='highPrice'>가격 높은 순</option>
                <option value='lowPrice'>가격 낮은 순</option>
                <option value='updated'>최신 순</option>
                <option value='outdated'>오래된 순</option>
            </select>
            <input type='date' onChange={(e) => {setStartDate(e.target.value)  }} />
            <input type='date' onChange={(e) => { setEndDate(e.target.value) }} />
            <button onClick={handleFilter}>확인</button>
        </div>
    );
};

export default ItemFilter;
