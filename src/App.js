import {Route} from 'react-router';

import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

import './App.css';

function App() {

  return (
    <>
      <Route exact path={'/'} component={HomePage} />
      <Route exact path={'/details/:sha'} component={DetailsPage} />
    </>
  );
}

export default App;
