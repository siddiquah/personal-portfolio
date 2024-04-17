import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Profilepic from "./Components/Profilepic";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import Services from "./Components/Services";
import ProgressBar from "./Components/ProgressBar";
import Langs from './Components/Langs';
import Contact from './Components/Contact';
// import Footer from './Components/Footer';


function App() {
  return (
    <div className='w-screen'>
      <Header />
      <SideBar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 p-5 mt-[90px]">
          <Introduction />
          <About />
          <Services />
          <Langs />
          <Contact />
          {/* <Footer /> */}
        </div>
        <div className="hidden md:block">
          <ProgressBar />
          <Profilepic />
        </div>
      </div>
    </div>
  );
}

export default App;
