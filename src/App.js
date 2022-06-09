import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Headers from './Pages/Sheard/Headers/Headers';
import Home from './Pages/Home/Home';
import Services from './Pages/Component/Services.js/Services';
import Testimonials from './Pages/Component/Testimonials/Testimonials';
import Portfolio from './Pages/Component/Portfolio/Portfolio';
import Experience from './Pages/Component/Experience/Experience';

function App() {

  return (
    <div>
      <Headers>
      <Routes>
          <Route path='/home' element={<Home></Home>}/>
          <Route path='/services' element={<Services></Services>}/>
          <Route path='/experience' element={<Experience></Experience>}/>
          <Route path='/portolio' element={<Portfolio></Portfolio>}/>
          <Route path='/testimonials' element={<Testimonials></Testimonials>}/>
        </Routes>
       </Headers>
   </div>
  );
}

export default App;
