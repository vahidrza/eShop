import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/checkout' element={<><Header /><CheckOut /></>} />
          <Route path='/' element={<><Header /><Home /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
