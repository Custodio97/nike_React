import './App.css'
import Home from './components/Home/index';
import Navbar from './components/Navbar';
import ImageOne from './components/ImageOne'
import ImageTwo from './components/ImageTwo'
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ImageOne />
      <Products />
      <ImageTwo />
      <About />
      <Footer/>
    </>
  );
}

export default App;
