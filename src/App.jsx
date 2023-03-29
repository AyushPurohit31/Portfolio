import { BrowserRouter } from "react-router-dom"
import { About, Contact, Hero, Navbar, Education, Tech, Projects, Footer} from './components';


const App = () =>{

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-slate-800">
        <div>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Education/>
        <Tech/>
        <Projects/>
        <div className="relative z-0">
          <Contact/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
