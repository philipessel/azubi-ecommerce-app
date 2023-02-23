
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import SideBar from './components/SideBar';



function App() {
  return (
    <div className="App">

      <h1> Azubi E-commerce App</h1>

      <div className="nav-main-sideBar">

        <div className="nav-main">
          <Nav />
          <Main />
        </div>
        <div><SideBar /></div>

      </div>

    </div>
  );
}

export default App;
