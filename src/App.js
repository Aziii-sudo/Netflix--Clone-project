import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {orginals, action, ComedyMovies} from './url'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <Rowpost url={orginals} title='Netflix Orginals' />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={ComedyMovies} title='ComedyMovies' isSmall />
    </div>
    
  );
}

export default App;


