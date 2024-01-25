import react from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import navbar from './componentes/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
   <navbar/>
   <Switch>
    <Route path='/' exact />
    </Switch>
    </Router>
    </>

  );
}

export default App;
