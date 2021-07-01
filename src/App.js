import {Route} from 'react-router';

import Header from './components/Header';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

function App() {

  return (
    <div className={'bg-dark text-white-50'} >
      <Route path={'/'} component={Header} />
      <Route exact path={'/'} component={HomePage} />
      <Route exact path={'/details/:sha'} component={DetailsPage} />
    </div>
  );
}

export default App;
