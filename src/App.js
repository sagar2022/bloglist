// import Hello from './Hello';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
