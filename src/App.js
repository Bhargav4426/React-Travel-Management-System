import './App.css';
import './SearchBar';
import FooterComp from './FooterComp';
import {Routes,Route} from 'react-router-dom';
import RegistrationSuccess from './RegistrationSuccess';
import UpdateDetails from './UpdateDetails';
import UpdateSuccess from './UpdateSuccess';
import FailMessage from './FailMessage';
import KeralaTourPackages from "./Domestic-Tour-Packages/KeralaTourPackages";
import GoaTourPackages from "./Domestic-Tour-Packages/GoaTourPackages";

import AndamanTourPackages from './Domestic-Tour-Packages/AndamanTourPackages';
import KarnatakaTourPackages from './Domestic-Tour-Packages/KarnatakaTourPackages';
import RajasthanTourPackages from './Domestic-Tour-Packages/RajasthanTourPackages';
import HimachalTourPackages from './Domestic-Tour-Packages/HimachalTourPackages';
import LehLadakhTourPackages from './Domestic-Tour-Packages/LehLadakhTourPackages';
import KashmirTourPackages from "./Domestic-Tour-Packages/KashmirTourPackages";
import TamilnaduTourPackages from './Domestic-Tour-Packages/TamilnaduTourPackages';
import UttarakhandTourPackages from './Domestic-Tour-Packages/UttarakhandTourPackages';
import AustraliaTourPackages from './International-Tour-Packages/AustraliaTourPackages';
import BaliTourPackages from './International-Tour-Packages/BaliTourPackages';
import DubaiTourPackages from './International-Tour-Packages/DubaiTourPackages';
import EuropeTourPackages from './International-Tour-Packages/EuropeTourPackages';
import MalaysiaTourPackages from './International-Tour-Packages/MalaysiaTourPackages';
import MaldivesTourPackages from './International-Tour-Packages/MaldivesTourPackages';
import MauritiusTourPackages from './International-Tour-Packages/MauritiusTourPackages';
import SingaporeTourPackages from './International-Tour-Packages/SingaporeTourPackages';
import SrilankaTourPackages from './International-Tour-Packages/SrilankaTourPackages';
import ThailandTourPackages from './International-Tour-Packages/ThailandTourPackages'
import AdventureTourPackages from './Themes/AdventureTourPackages';
import FamilyTourPackages from './Themes/FamilyTourPackages';
import HoneymoonTourPackages from './Themes/HoneymoonTourPackages';
import WeekendGetawayTourPackages from './Themes/WeekendGetawayTourPackages'
import HomePage from './HomePage';
import SearchBar from "./SearchBar";
import About from "./About";
import ContactUs from './ContactUs'
import TourRegistrationForm from "./TourRegistrationForm";
import DeleteSuccess from './DeleteSuccess';
import ScrollToTop from './ScrollToTop';
import NavBar from './NavBar';
function App() {
  return (
      <div className="App">
      <ScrollToTop/>
      <NavBar/>
      <SearchBar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/keralatourpackages" element={<KeralaTourPackages/>}></Route>
        <Route exact path="/goatourpackages" element={<GoaTourPackages/>}></Route>
        <Route exact path="/rajasthantourpackages" element={<RajasthanTourPackages/>}></Route>
        <Route exact path="/kashmirtourpackages" element={<KashmirTourPackages/>}></Route>
        <Route exact path="/lehladakhtourpackages" element={<LehLadakhTourPackages/>}></Route>
        <Route exact path="/himachaltourpackages" element={<HimachalTourPackages/>}></Route>
        <Route exact path="/andamantourpackages" element={<AndamanTourPackages/>}></Route>
        <Route exact path="/uttarakhandtourpackages" element={<UttarakhandTourPackages/>}></Route>
        <Route exact path="/karnatakatourpackages" element={<KarnatakaTourPackages/>}></Route>
        <Route exact path="/tamilnadutourpackages" element={<TamilnaduTourPackages/>}></Route>
        <Route exact path="/dubaitourpackages" element={<DubaiTourPackages/>}></Route>
        <Route exact path="/malaysiatourpackages" element={<MalaysiaTourPackages/>}></Route>
        <Route exact path="/singaporetourpackages" element={<SingaporeTourPackages/>}></Route>
        <Route exact path="/thailandtourpackages" element={<ThailandTourPackages/>}></Route>
        <Route exact path="/balitourpackages" element={<BaliTourPackages/>}></Route>
        <Route exact path="/europetourpackages" element={<EuropeTourPackages/>}></Route>
        <Route exact path="/mauritiustourpackages" element={<MauritiusTourPackages/>}></Route>
        <Route exact path="/maldivestourpackages" element={<MaldivesTourPackages/>}></Route>
        <Route exact path="/australiatourpackages" element={<AustraliaTourPackages/>}></Route>
        <Route exact path="/srilankatourpackages" element={<SrilankaTourPackages/>}></Route>
        <Route exact path="/honeymoontourpackages" element={<HoneymoonTourPackages/>}></Route>
        <Route exact path="/adventuretourpackages" element={<AdventureTourPackages/>}></Route>
        <Route exact path="/familytourpackages" element={<FamilyTourPackages/>}></Route>
        <Route exact path="/weekendgetawaytourpackages" element={<WeekendGetawayTourPackages/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/contact" element={<ContactUs/>}></Route>
        <Route exact path="/tourregisterform" element={<TourRegistrationForm/>} ></Route>
        <Route exact path="/registrationsuccess" element={<RegistrationSuccess/>}></Route>
        <Route exact path="/fail" element={<FailMessage/>}></Route>
        <Route exact path='/updatedetails' element={<UpdateDetails/>}></Route>
        <Route exact path='/updatesuccess' element={<UpdateSuccess/>}></Route>
        <Route exact path='/deleteSuccess' element={<DeleteSuccess/>}></Route>
      </Routes>
      <FooterComp/>
      </div>
  );
}
export default App;
