import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/customStyles.css';
import Home from './components/screens/Home';
import About from './components/screens/About';
import MyWork from './components/screens/MyWork';
function App() {
  return (
    <>
      <h1>Header</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<MyWork />} />
        </Routes>
      </BrowserRouter>
      <h1>Footer</h1>
    </>
  )
}

export default App
