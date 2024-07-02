import * as React from 'react';
import Portfolio from './Portfolio/Body';
import Header from './Header';
import Background from './Background';

const App: React.FC = _ => {
  return <div className="App">
    <Header />
    <div>
      <Background />
      <Portfolio />
    </div>
  </div>
}

export default App;
