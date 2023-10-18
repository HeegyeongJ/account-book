import React, { useState } from 'react';

const FormMemo = () => {
    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = (e) => {
        setIsChecked(!isChecked)
    }
    return (
        <div>
            <label>메모 </label>
            <input type="checkbox" checked={isChecked} onChange={checkHandler}/>
            {isChecked ? <input type='text'/> : <p></p>}
        </div>
    );
};

export default FormMemo;