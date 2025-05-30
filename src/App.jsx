import { HeaderNav } from './components/HeaderNav';
import { Banner } from './components/Banner';
import { Artists } from './components/Artists';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <HeaderNav/>
      <Banner/>
      <Artists/>
      <Footer/>
      <Outlet />  
    </div>
    );
  }
  
  export default App;