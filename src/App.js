import './App.css';
import {Routes, BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Superhero } from './components/SuperHeroes.page';
import { RQSuperHeroespage } from './components/RQSuperheroes.page';
import { Homepage } from './components/Home.page';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevTools} from 'react-query/devtools';

const queryClient = new queryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/super-heroes'> Super Hero </Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'> RQ Super Hero </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/super-heroes'>
            <Superhero/>
          </Route>
          <Route path='/rq-super-hero'>
            <RQSuperHeroespage/>
          </Route>
          <Route path='/' >
              <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
    <ReactQueryDevTools initialIsOpem={false}  />
    </QueryClientProvider>
  );
}

export default App;
