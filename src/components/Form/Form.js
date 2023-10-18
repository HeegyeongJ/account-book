import React from 'react';
import { useState } from 'react';
import FormSelect from './FormSelect';
import FormMemo from './FormMemo';

const Form = (props) => {
    const [object, setObject] = useState({
        name: '',
        cost: 0,
        type: '',
        date: new Date(),
        memo: '',
        intention: ''
    });

    const nameChange = (e) => {
        setObject((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const costChange = (e) => {
        setObject((prevState) => ({
            ...prevState,
            cost: e.target.value,
        }))
    }

    const getSelectValue = (selectedValue) => {
        setObject((prevState) => ({
            ...prevState,
            type:selectedValue,
        }))
    }

    const dateChange = (e) => {
        setObject((prevState) => ({
            ...prevState,
            date:e.target.value,
        }))
    }
    
    const intentionChange = (e) => {
        setObject((prevState) => ({
            ...prevState,
            intention: e.target.value,
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.getItem(object)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>이름 </label>
                    <input type="text" onChange={nameChange} />
                </div>
                <div>
                    <label>가격 </label>
                    <input type="number" onChange={costChange} />
                </div>
                <FormSelect getSelectValue={getSelectValue}/>
                <div>
                    <label>구입 날짜 </label>
                    <input type="date" onChange={dateChange}/>
                </div>
                <FormMemo/>
                <div>
                    <label>재구매 의사 </label>
                    <input onChange={intentionChange} type="radio" name='buyIntention' value="O"/>한다
                    <input onChange={intentionChange} type="radio" name='buyIntention' value="X"/>안한다
                </div>
                <button type='submit'>추가</button>
            </form>
        </div>
    );
};

export default Form;