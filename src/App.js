import { Home, NavBar, Footer, NotFound } from './components';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [search, setSearch] = useState('');

  const handleChange = (val) => setSearch(val);
  
  return (
    <Router>
    <div className="app">
      <header>
        <NavBar handleChange={ handleChange } />
      </header>

      <main>
      <Routes>
        <Route exact path="/" element={ <Home search={ search } /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
    </Router>
  );
}

export default App;
