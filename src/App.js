import './App.css';
import Navbar from './components/Navbar';
import Blog from './containers/Blog';
import Brand from './containers/Brand';
import Footer from './containers/Footer';
import Header from './containers/Header';
import WhatGPT3 from './containers/WhatGPT3';
import Possibility from './containers/Possibility';
import CallToAction from './components/CallToAction';
import Features from './containers/Features';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brand /> 
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CallToAction />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
