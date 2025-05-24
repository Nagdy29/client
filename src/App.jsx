import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navv from './components/Navv';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import Detialsroom from './pages/Detialsroom';
import Booking from './pages/Booking';
import Layout from './pages/HotelOwner/Layout';
import Dasbord from './pages/HotelOwner/Dasbord';
import Addroom from './pages/HotelOwner/Addroom';
import Listroom from './pages/HotelOwner/Listroom';

function App() {
  return (
    <div className="">
      
<div>
<div className='min-h-[70vh]'>
    <Navv/>
  <Routes>
    <Route path='/' element={<Home/>} /> 
    <Route path='/rooms' element={<AllRooms/>} /> 
    <Route path='/rooms/:id' element={<Detialsroom/>} /> 
    <Route path='/booking' element={<Booking />} /> 
    <Route path='/owner' element={<Layout />} >
    <Route  index  element={<Dasbord />} /> 
    <Route path='addroom' element={<Addroom />} /> 
    <Route path='listroom' element={<Listroom />} /> 
    
    </Route> 

  </Routes>

</div>
  <Footer/>
</div>
    </div>
  );
}

export default App;
