import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


// App components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import BadRoute from './components/BadRoute';

// CSS
//import './css/index.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <SearchForm />
        <Nav />
        {/* Routes for search and 404 */}
       
      </div>
      <Routes>

<Route path="/search/:query" element={<PhotoContainer/>}></Route>


<Route element={BadRoute} />
</Routes>
    </Router>
  );
}

export default App;