import React, {useState, useEffect } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DATASET from './Firebase.js';
 
function  App (){
    const [users,setUsers]=useState([]);
    const [searchField, setSearchField]=useState('');
  
 const handleChange=(event)=>{
    setSearchField(event.target.value);
  }

  useEffect((()=>{
    setUsers(DATASET);
  }),[])

    const filteredUsers=users.filter(user=>user.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
      <h1>Basic Search Test</h1>
      <SearchBox placeholder='user search' handleChange={handleChange}/>
      <CardList users={filteredUsers} /> 
    </div>
  );
}

export default App;
