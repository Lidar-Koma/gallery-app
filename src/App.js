import React from 'react';

import {HashRouter, Routes, Route} from 'react-router-dom'


// App components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import BadRoute from './components/BadRoute';

// CSS
//import './css/index.css';

const App = () => {
  return (
   
      
      <HashRouter basename="/">
      <div className="container">
        <SearchForm />
        <Nav />
        {/* Routes for search and 404 */}
       
      </div>
      <Routes>

<Route path="/search/:query" element={<PhotoContainer/>}></Route>
<Route exact path="/:query" element={<PhotoContainer/>}></Route>



<Route path="*" element={<BadRoute/>} />
</Routes>
</HashRouter>
 
  );
}

export default App;