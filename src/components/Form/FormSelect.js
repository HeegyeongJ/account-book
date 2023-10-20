import React from 'react';

const FormSelect = ({getSelectValue}) => {
    const options = [
        {value: '식료품', name: '식료품'},
        {value: '의류', name: '의류'},
        {value: '교통비', name: '교통비'},
        {value: '건강', name: '건강'},
        {value: '여가비', name: '여가비'}
    ]
    

    const selectHandler = (e) => {
       getSelectValue(e.target.value)
    }

    return (
        <div>
            <label>유형 </label>
            <select onChange={selectHandler} value={options.name}>
                <option>유형선택</option>
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