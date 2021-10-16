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
      <Nav />
      <Register />
    </main>
  );
}

export default App;
