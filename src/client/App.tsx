import * as React from 'react';
import '../styles/App.css';
import Portfolio from './Portfolio/Body';
import Header from './Header';

const App: React.FC = _ => {
  return <div className="App">
    <Header />
    <div>
      <Portfolio />
    </div>
  </div>
}

export default App;
