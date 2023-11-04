import './App.css';
import Register from './Components/Register/Register.jsx';
import Login from "./Components/Login/Login.jsx"
import Users from "./Components/Users/Users.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users/:userID' element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
