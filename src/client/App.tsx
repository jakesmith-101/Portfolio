import * as React from 'react';
import Portfolio from './Portfolio/Body';
import Header from './Header';
import Background from './Background/Background';

const App: React.FC = _ => {
  return <div className="App">
    <Background>
      <Portfolio />
    </Background>
  </div>
}

export default App;
