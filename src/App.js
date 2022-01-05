import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import UserPicComponent from './Components/UserPicComponent/UserPicComponent';
import UserNavLinks from './Components/UserNavLinks/UserNavLinks';
import ServicesAndExchange from './Components/ServicesAndExchange/ServicesAndExchange';

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
      <hr />
      <div className='information'>
       <ServicesAndExchange/>
      </div>
    </div>
  );
}

export default App;
