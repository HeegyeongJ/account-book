import React from 'react';

const ItemFilter = () => {
    return (
        <div>
            <select name='typeFilter'>
                <option>유형 필터</option>
                <option>식료품</option>
                <option>의류</option>
                <option>교통비</option>
                <option>건강</option>
                <option>여가비</option>
            </select>
            <select name='orderFilter'>
                <option>정렬 기준</option>
                <option>가격 높은 순</option>
                <option>가격 낮은 순</option>
                <option>최신 순</option>
                <option>오래된 순</option>
            </select>
            <input type='date' />
            <input type='date' />
        </div>
    );
};

export default ItemFilter;
