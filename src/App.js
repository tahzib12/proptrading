import './App.css';
import Footer from './Components/Footer';
import Hero1 from './Components/Hero1';
import Hero2 from './Components/Hero2';
import LatestNews from './Components/LatestNews';
import Navbar from './Components/Navbar';
import Quotes from './Components/Quotes';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero1 />
     <Hero2 />
     <div className='z-1 bg-white'>
     <LatestNews />
     </div>
     <div className='z-1 bg-white'>
     <Quotes />
     </div>
     <Footer />
    </div>
  );
}

export default App;
