import React from 'react';
import './App.css';
import NavHeader from './components/navHeader';
import {SearchHotels} from './components/SearchHotels';
function App() {
  return (
    <div className="App">
      <NavHeader></NavHeader>
      <SearchHotels></SearchHotels>

    </div>
  );
}

export default App;
