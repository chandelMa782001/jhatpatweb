import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import HotelFeature from './pages/HotelFeature';
import FlightFeature from './pages/FlightFeature';
import TrainFeature from './pages/TrainFeature';
import BusFeature from './pages/BusFeature';
import CabFeature from './pages/CabFeature';
import EventFeature from './pages/EventFeature';
import WhyChooseUs from './pages/WhyChooseUs';
import DriverPartner from './pages/DriverPartner';
import PartnerWithUs from './pages/PartnerWithUs';
import WalletRewards from './pages/WalletRewards';
import Footer from './Component/Footer';
import LaunchNotification from './pages/LaunchNotification';
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
             <BusFeature/>
             <CabFeature/>
             <EventFeature/>
             <WalletRewards/>
              <DriverPartner/>
             <PartnerWithUs/>
             <WhyChooseUs/>
             <LaunchNotification/>
          </>
        }></Route>
      </Routes>
      <Footer/>
    </div>
  );
};
export default App;
