import React from 'react';
import {styled} from 'styled-components';

const Item = (props) => {
    return (
        <ItemBox>
            <P>{props.date}</P>
            <div>
                <P className='item-type'>유형: {props.type}</P>
                <P>이름: {props.name}</P>
                <P className='item-cost'>가격: {props.cost}</P>
            </div>
            <Memo>{props.memo}</Memo>
            <p className='item-intention'>재구매 : {props.buyIntention}</p>
        </ItemBox>
    );
};

export default Item;

const ItemBox = styled.div`
    padding: 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #000;
    border-radius: 4px;
`
const P = styled.p`
    margin:0;
`
const Memo = styled.p`
    width: 50%;
    text-align: center;
`
