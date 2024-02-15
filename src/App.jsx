import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import './App.css';
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
            <Header/>

      <div className="">
        <div className="white-gradient"/>
      
      <Hero/>
      </div>
      <div className="bodyContainer">
      <Companies />
      <Residencies/>
      <Value />
      <Contact />
      <GetStarted/>
      <Footer/>
      </div>
    </div>
    );
}

export default App;
