import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/customStyles.css';
import Home from './components/screens/Home';
import About from './components/screens/About';
import MyWork from './components/screens/MyWork';
import NavBar from './components/screenComponents/NavBar';
import Footer from './components/screenComponents/Footer';
import Story from './components/screens/Story';
import Contact from './components/screens/Contact';
import PreLoader from './components/screenComponents/loaders/PreLoader';
function App() {
  return (
    <>
    <PreLoader />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<MyWork />} />
          <Route path='/story' element={<Story />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
