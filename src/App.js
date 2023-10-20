import Form from './components/Form/Form';
import './App.css';
import ItemList from './components/Item/ItemList';
import { useEffect, useState } from 'react';
import ItemFilter from './components/Item/ItemFilter';

function App() {
  const [items, setItem] = useState([
    {
      name: '우유',
      cost: 2000,
      type: '식료품',
      date: '2023. 10. 15.',
      memo: '오늘 삼',
      buyIntention: 'O'
    },
    {
      name: '초콜릿',
      cost: 1000,
      type: '식료품',
      date: new Date().toLocaleDateString("ko-KR"),
      memo: '최애 초콜릿',
      buyIntention: 'O'
    },
    {
      name: '병원비',
      cost: 10000,
      type: '건강',
      date: new Date().toLocaleDateString("ko-KR"),
      memo: '감기',
      buyIntention: 'O'
    },
    {
      name: '폰케이스',
      cost: 12000,
      type: '여가비',
      date: new Date().toLocaleDateString("ko-KR"),
      memo: '',
      buyIntention: 'X'
    },
  ])
  const [filteredItems, setFilteredItems] = useState(items)

  const handleFilterChange = (filtered) => {
    setFilteredItems(filtered);
  }

  useEffect(() => {
    handleFilterChange(items);
  },[items])

  const setItemHandler = (data) => {
    setItem((prevState) => ([
      {
        name: data.name,
        cost: data.cost,
        type: data.type,
        date: data.date,
        memo: data.memo,
        buyIntention: data.intention
      },
      ...prevState
    ]))
  }
  

 
  
  return (
    <div className="App">
      <h1>가계부</h1>
      <Form getItem={setItemHandler} />
      <ItemFilter items={items} onFilterChange={handleFilterChange} />
      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;
