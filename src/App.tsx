import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Events from './Pages/Events/Events'
import Home from './Pages/Home/Home'
import Leadership from './Pages/Leadership/Leadership'
import Tracks from './Pages/Tracks/Tracks'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
     <div>
     <Navbar/>
     </div>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Leadership" element={<Leadership />} />
        <Route path="/Tracks" element={<Tracks />} />
        <Route path="Events/" element={ <Events/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App