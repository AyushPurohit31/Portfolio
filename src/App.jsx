import { BrowserRouter } from "react-router-dom"
import { About, Contact, Hero, Navbar, Education, Tech, Projects, Footer} from './components';
import { useState } from "react";


const App = () =>{
  const [light, setLight] = useState(false);
  const handleLightChange = () => {
    setLight(!light); 
  };
  return (
    <BrowserRouter>
      <div className={`relative z-0 ${light=== true ?  "bg-white-100" : 'bg-slate-900'}`}>
       
        <Navbar light={light} onLightChange={handleLightChange}/>
        <Hero light={light}/>
        
        <About light={light}/>
        <Education light={light}/>
        <Tech light={light}/>
        <Projects light={light}/>
        <div className="relative z-0">
          <Contact light={light}/>
        </div>
        <Footer light={light}/>
      </div>
    </BrowserRouter>
  )
}

export default App
