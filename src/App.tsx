import {useEffect, useState} from 'react'
import Navbar from '@/components/shared/Navbar'
import { SelectedPage } from '@/shared/types';
import Home from '@/components/home/Home';
import Benefits from '@/components/home/Benefits';
import OurClasses from '@/components/home/OurClasses';
import ContactUs from './components/home/ContactUs';
import Footer from './components/shared/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
  const handleScroll = () =>{
    if(window.scrollY===0){
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    }
    if(window.scrollY!==0) setIsTopOfPage(false);
  }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  

  return <div className='app bg-gray-20'>
    <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage} />
    <ContactUs setSelectedPage={setSelectedPage} />
    <Footer />
  </div>
}

export default App;
