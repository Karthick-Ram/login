import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/Function';
import LoginClass from './Pages/LoginClass';
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import Nav from './Components/Nav';
import LoginFunction from './Pages/LoginFunction';
function App() {
  return (
    <div>
<h1 className='App'>Login</h1>
<Router>
   <Nav/>
   <Routes>
     <Route path='/loginclass' element={<LoginClass/>}></Route>
     <Route path='/loginfunction' element={<LoginFunction/>}></Route>
     </Routes>
 </Router>
    </div>
  );
}

export default App;
