import React, { useRef, useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css';
import Homepage from './components/pages/Homepage'
import Buystock from './components/pages/Buystock'
import Navbar from './components/common/navbar'

// import Footer from './components/common/footer'
import Pending from './components/pages/pending';
import Orders from './components/pages/orders';
import Insights from './components/pages/insights';
import History from './components/pages/history';
import Settings from './components/pages/settings';

function App() {
const [navClasses, setNavClasses] = useState(null);


function toggle() {
if (navClasses === null) {
 setNavClasses('class-name')
} else {
 setNavClasses(null)
}

}

  return (
   <>
   <div className='main-wrapper'>
<BrowserRouter>
<div onClick={toggle} className='toggle-btn'><i class="fa-solid fa-bars"></i></div>
<div className={'sticky-nav ' +navClasses }>

<Navbar />

</div>


<div className='contactsection'>
<Routes>

<Route path='/' element={<Homepage/>} />
<Route path='/buystock' element={<Buystock/>} />
<Route path='/pending' element={<Pending/>} />
<Route path='/orders' element={<Orders/>} />
<Route path='/insights' element={<Insights/>} />
<Route path='/history' element={<History/>} />
<Route path='/settings' element={<Settings/>} />

</Routes>
</div>
</BrowserRouter>
</div>
   </>
  );
  }

export default App;
