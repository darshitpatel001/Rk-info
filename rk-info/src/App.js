import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Ourclient from './Ourclient';
import Services from './Services';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Footer from './Footer';
import Products from './Products'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/clientreview' element={<Ourclient />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/abouts' element={<Aboutus />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/product' element={<Products />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
