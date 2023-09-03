
import './App.css';
import Home from './Components/Home';
import Advature from './Components/Adavature'
import NavBar from './Components/Navbar';
import MemberShip from './Components/MemberShip';
import OurDetsination from "./Components/OurDestination"
import DiscountSection  from './Components/DiscountSection';
import Testimonials from "./Components/Testimonials"
import SpecialDiscount from './Components/SpecialDiscount';
import FooterSection from './Components/FooterSection';

function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
    <Advature />
    <OurDetsination/>
    <DiscountSection/>
    <MemberShip/>
    <Testimonials/>
    <SpecialDiscount/>
    <FooterSection/>
    </div>
    
  );
}

export default App;
