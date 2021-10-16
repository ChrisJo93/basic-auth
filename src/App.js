import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <main>
      <Router>
        <div>
          <Nav />

          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </main>
  );
}

export default App;
