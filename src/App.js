import {Route, Redirect, Switch} from 'react-router';

import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <div className={'bg-dark text-white-50'}>
      <Switch>      
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/details/:sha'} component={DetailsPage}/>
        <Route path={'*'}>
          <Redirect to={'/'}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
