import React from 'react';
import './App.css';
import Nav  from "./components-react/nav/nav";
import Main from './components-react/layout/main/main';
import EventList from './components-react/eventList/eventList';
import EventDashBoard from './components-react/eventDashBoard/eventDashBoard';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/> 
    </div>
  );
}

export default App;
