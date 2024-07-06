import * as React from 'react';
import Portfolio from './Portfolio/Body';
import Background from './Background/Background';

const App: React.FC = _ => {
  const bounds = React.useMemo(() => {
    const app = document.getElementsByClassName("App").item(0);
    if (app !== null) {
      return {
        width: app.clientWidth,
        height: app.clientHeight
      }
    }
    return null;
  }, [window.innerWidth, window.innerHeight, window.outerHeight, window.outerWidth]);

  return <div className="App">
    <Background bounds={bounds}>
      <Portfolio />
    </Background>
  </div>
}

export default App;
