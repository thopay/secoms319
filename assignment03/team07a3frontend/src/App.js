import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('create');

  return (
    <div className="bg-gray-100">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;

