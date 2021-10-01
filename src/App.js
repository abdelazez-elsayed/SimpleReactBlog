import Navbar  from './Navbar';
import Home from './Home';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Create from './Create';
import Blog from './Blog';
import NotFound from './NotFound';
function App() {
  const title = "Hello to the elzoz blog";
  const likes = 41;
  const person = {name :'elzoz',
                  age : 22}
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>  
          </Route>
          <Route exact path="/blogs/:id">
            <Blog/>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
