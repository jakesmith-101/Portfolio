import * as React from 'react';
import '../styles/App.css';
import Portfolio from './Portfolio';
import Header from './Header';

const App: React.FC = _ => {
  return <div className="App">
    <Header />
    <Portfolio />
  </div>
}

export default App;
