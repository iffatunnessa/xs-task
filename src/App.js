import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Component/Nav/Nav';
import List from './Component/List/List';
import Update from './Component/Update/Update';
import Create from './Component/Create/Create';

function App() {
  return (
    <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/update/:id">
              <Update />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/">
              <List />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
