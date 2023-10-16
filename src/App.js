import logo from './logo.svg';
import Form from './components/Form';
import './App.css';
import ItemList from './components/ItemList';
import { useState } from 'react';
import ItemFilter from './components/ItemFilter';

function App() {
  const [items, setItem] = useState([
    {name: '우유',
    cost: 2000,
    type: '식료품',
    date: new Date(),
    memo: '오늘 삼',
    buyIntention: false}
  ])

  const setItemHandler = (data) => {
    setItem((prevState)=> ([
      ...prevState,
      {name: data.name,
        cost: data.cost,
        type: data.type,
        date: new Date(data.date),
        memo: data.memo,
        buyIntention: data.intention}
    ]))
  }

  return (
    <div className="App">
      <h1>가계부</h1>
      <Form getItem={setItemHandler}/>
      <ItemFilter />
      <ItemList items={items} />
    </div>
  );
}

export default App;
