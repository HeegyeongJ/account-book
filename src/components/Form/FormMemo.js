import React, { useState } from 'react';

const FormMemo = () => {
    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <label>메모 </label>
            <input type="checkbox" checked={isChecked} onChange={checkHandler}/>
            {isChecked ? <input type='text'/> : !isChecked}
        </div>
    );
};

export default FormMemo;