import Navbar  from './Navbar';
import Home from './Home';
function App() {
  const title = "Hello to the elzoz blog";
  const likes = 41;
  const person = {name :'elzoz',
                  age : 22}
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
