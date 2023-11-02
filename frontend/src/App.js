import './App.css';
import Register from './Components/Register/Register.jsx';
import Login from "./Components/Login/Login.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
