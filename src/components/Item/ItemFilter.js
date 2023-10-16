import React from 'react';

const ItemFilter = () => {
    return (
        <div>
            <select name='typeFilter'>
                <option>유형 필터</option>
            </select>
            <select name='orderFilter'>
                <option>정렬 기준</option>
            </select>
            <input type='date' />
            <input type='date' />
        </div>
    );
};

export default ItemFilter;
