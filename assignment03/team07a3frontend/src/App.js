import './App.css';
import Nav from './components/Nav';
import Create from './components/Create';
import View from './components/View';
import Delete from './components/Delete';
import Update from './components/Update';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('create');

  return (
    <div className="bg-gray-100">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'create' ? <Create /> : currentPage === 'view' ? <View /> : currentPage === 'update' ? <Update /> : <Delete />}
    </div>
  );
}

export default App;

