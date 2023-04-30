import './App.css';
import Nav from './components/Nav';
import Create from './components/Create';
import View from './components/View';
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('create');

  return (
    <div className="bg-gray-100">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'create' ? <Create /> : <View />}
    </div>
  );
}

export default App;

