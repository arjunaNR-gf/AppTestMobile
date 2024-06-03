import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const[myname,setName] = useState({name:''})
  useEffect(()=>{
     axios.get("").then(res=>setName({name:res.data.name}))
  })
  return (
    <div className="App">
      <h2>{myname.name}</h2>
    </div>
  );
}

export default App;
