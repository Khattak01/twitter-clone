import './App.css';
import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Widgets from '../widgets/Widgets'
import Feed from '../feed/Feed'

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* feed */}
      <Feed />
      {/* widget */}
      <Widgets />
    </div>
  );
}

export default App;
