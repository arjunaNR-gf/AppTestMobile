import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const[myname,setName] = useState({name:''})
  useEffect(()=>{
     axios.get("https://localhost:7141/UserName").then(res=>setName({name:res.data.name}))
     .catch((error)=>{
      console.log(error)
     })
  },[])
  return (
    <div className="App">
      <h2>{myname.name}</h2>
    </div>
  );
}

export default App;
