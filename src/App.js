import { Route, Routes } from 'react-router-dom';
import { Header, Item } from './Components';
import {Home, Planets, Stats} from "./Pages";
import './App.css';

function App() {
  return (
    <div className="App">
       <Header/>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/stats" element={<Stats/>}/>
             <Route path="/planets" element={<Planets/>}/>
             <Route path="/planets/:id" element={<Item/>}/>
          </Routes>
    </div>
  );
}

export default App;
