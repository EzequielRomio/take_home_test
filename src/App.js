import {Route} from 'react-router';

import HomePage from './components/HomePage';
import Commit from './components/Commit';

import './App.css';

function App() {

  return (
    <>
      <Route exact path={'/'} component={HomePage} />
      <Route exact path={'/details/:sha'} component={Commit} />
    </>
  );
}

export default App;
