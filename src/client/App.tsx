import * as React from 'react';
import Portfolio from './Portfolio/PlayArea';
import Background from './Background/Background';

const App: React.FC = _ => {
  const users = ["jakesmith-101", "ZiarayZ"]; // my users for testing

  return <div className="App">
    <Background>
      <Portfolio users={users} />
    </Background>
  </div>
}

export default App;
