import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout/index';
import Home from './assets/components/Home/index';
import About from './assets/components/About/index';
import Contact from './assets/components/Contact/index';


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" component={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        </Route>
      </Routes> 
    </>           
  )
}

export default App
