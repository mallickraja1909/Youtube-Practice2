import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Compo/Footer';
import Header from './Compo/Header';
import Home from './Compo/Home';
import Signup from './Compo/Signup';
import Upload from './Compo/Upload';
import Videos from './Compo/Videos';
import Login from './Compo/Login';
function App() {
  return (
  <Router>
<Header/>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/videos' element={<Videos/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
