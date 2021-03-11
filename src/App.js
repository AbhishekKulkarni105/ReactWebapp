
import './App.module.css';
import Topbar from './component/Topbar/Topbar';
import LandingSection from './component/LandingSection/LandingSection';
import LandingSectionTwo from './component/LandingSectionTwo/LandingSectionTwo';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <LandingSection/>
      <LandingSectionTwo/>
     <Footer/>
    </div>
  );
}

export default App;
