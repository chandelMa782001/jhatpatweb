import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import HotelFeature from './pages/HotelFeature';
import FlightFeature from './pages/FlightFeature';
import TrainFeature from './pages/TrainFeature';
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={ 
          <>
            <Hero />
            <HotelFeature />
            <FlightFeature/>
            <TrainFeature/>
          </>
        }></Route>
      </Routes>
    </div>
  );
};
export default App;
