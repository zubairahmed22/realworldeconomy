
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import { HeaderComponent } from './Component/header';
import FreeSale from './freeSale';


import { Home } from './Home';
import About from './about';
import { Contact } from './Contact';
import { Team } from './Component/Team';

function App() {

  return (
    <div className="App">
        <HeaderComponent/>
  <Routes>

<Route path="/" element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/freesale' element={<FreeSale/>}/>


  
	
  <Route path='/team' element={<Team/>}/>
  
  {/* <Faq/> */}
  </Routes>
  <Footer/>
	
    </div>
  );
}

export default App;
