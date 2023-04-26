import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSignIn from './Components/Admin/AdminSignIn';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/checkout' element={<><Header /><CheckOut /></>} />
          <Route path='/admin_sign_in' element={<><AdminSignIn /></>} />
          <Route path='/login' element={<><Login /></>} />
          <Route path='/' element={<><Header /><Home /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;