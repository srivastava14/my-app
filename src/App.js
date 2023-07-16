//import logo from './logo.svg';

import './App.css';
/*import About from './components/About'; */
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from'./components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";




function App() {  
const [mode, setmode]=useState('light');
const [alert, setAlert]=useState(null);

const  showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
}

const toggleMode=()=>{
  if(mode==='light')
  {
    setmode('dark');
    document.body.style.backgroundColor='#1a1c27';
    showalert("Dark Mode has been enabled", "success");
    document.title='Title - dark';
   /* setInterval(() => {
      document.title='Title - yay';
    }, 2000);
    setInterval(() => {
      document.title='Title - wohh';
    }, 1500);*/
  }
  else
  {
    setmode('light');
    document.body.style.backgroundColor='white';
    showalert("Light Mode has been enabled", "success");
    document.title='Title - light';
  }
}
return (<>
{/*<Navbar title="New_tital" about_text="About new Title"/>*/}

<Router>
<Navbar title="TextUtils" mode={mode} about_text="About"  toggleMode={toggleMode}/>
<div className="container my-3">
<Alert alert={alert}/>
<Routes>
          <Route exact path="/about" element={<About/>}/>
        {/*}    {<About/>}
          </Route> */}
          
          <Route exact path="/" element={<Textform showalert={showalert} head="this is a heading" mode={mode}/>}/>
          
         {/* </Route> */}
</Routes>
 
{/*<About/>*/}
</div>
</Router>
    </>
  );
}

export default App;