import {useState} from 'react'
import Navbar from '@/components/shared/Navbar'

function App() {
  const [selectedPage, setSelectedPage] = useState()
  return <div className='app bg-gray-20'>
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
  </div>
}

export default App;
