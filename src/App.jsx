import { BrowserRouter } from "react-router-dom"
import { About, Contact, Hero, Navbar, Education, Tech, Projects, Footer} from './components';
import { useState } from "react";


const App = () =>{
  const [light, setLight] = useState(true);
  const handleLightChange = () => {
    setLight(!light); 
  };
  return (
    <BrowserRouter>
      <div className={`z-0 ${light=== true ?  "bg-white-100" : 'bg-slate-900'}`}>

        {light ? (
          <div class="back relative w-full max-w-lg items-center justify-center">
          <div class="absolute top-0 -left-4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
          <div class="absolute top-0 -right-4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
          <div class="absolute left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>
        ):null}
       
        <Navbar light={light} onLightChange={handleLightChange}/>
        <Hero light={light}/>
        
        <About/>
        <Education/>
        <Tech/>
        <Projects/>
        <div className="relative z-0">
          <Contact/>
        </div>
        <Footer light={light}/>
      </div>
    </BrowserRouter>
  )
}

export default App
