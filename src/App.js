
import './App.css';
import Footer from './Component/Footer';
import { Team } from './Component/Team';
import Availablity from './Component/availablity';
import FirstSection from './Component/firstSection';
import { HeaderComponent } from './Component/header';
import MainBanner from './Component/mainBanner';
import { OurService } from './Component/ourService';

function App() {
  return (
    <div className="App">
  

    <HeaderComponent/>
	<MainBanner/>
  <FirstSection/>
  <Availablity/>
  {/* <Team/> */}
  <OurService/>
  <Footer/>
	
    </div>
  );
}

export default App;
