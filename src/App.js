import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import UserPicComponent from './Components/UserPicComponent/UserPicComponent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <UserPicComponent />
      </div>
      <div>

      </div>
      <hr/>
    </div>
  );
}

export default App;
