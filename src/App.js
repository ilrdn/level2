/* import logo from './logo.svg'; */
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
document.addEventListener('DOMContentLoaded', function() {
  let items = document.querySelectorAll('.item');
  items.forEach(function(e, i) {
      let state = e.classList;
      e.addEventListener('mouseleave', function(e) {
          if (state.contains("selected")) {
              state.add("selectedOut");
          }
      });
      e.addEventListener('click', function(e) {
          if (state.contains("default")) {
              state.remove("default");
              state.add("selected");
          } else if (state.contains("selected")) {
              state.remove("selected");
              state.add("default");
          }
          state.remove("selectedOut");
      });
  });
}, false);

export default App;
