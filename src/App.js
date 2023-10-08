import './App.css';
import HomePage from './components/Dashboard/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
     <NavBar />
     <div className=' flex  '>
     <SideBar />
     <HomePage />

     </div>
    </div>
  );
}

export default App;