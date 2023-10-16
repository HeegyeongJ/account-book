import React, { useState } from 'react';

const FormSelect = ({getSelectValue}) => {
    const options = [
        {value: 'food', name: '식료품'},
        {value: 'clothes', name: '의류'},
        {value: 'transportation', name: '교통비'},
        {value: 'health', name: '건강'},
        {value: 'entertainment', name: '여가비'}
    ]
    

    const selectHandler = (e) => {
       getSelectValue(e.target.value)
    }

    return (
        <div>
            <label>유형 </label>
            <select onChange={selectHandler} value={options.name}>
                {options.map((option) => {
                    return <option value={option.value} key={option.value}>
                        {option.name}
                    </option>
                })}
            </select>
        </div>
    );
};

export default FormSelect;