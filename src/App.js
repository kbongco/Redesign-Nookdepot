import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import UserPicComponent from './Components/UserPicComponent/UserPicComponent';
import UserNavLinks from './Components/UserNavLinks/UserNavLinks';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <UserPicComponent />
      </div>
      <div>
        <UserNavLinks/>
      </div>
      <hr/>
    </div>
  );
}

export default App;
