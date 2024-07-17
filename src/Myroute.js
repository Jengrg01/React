import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import First from './First'
import Second from './Second'
import Header from './component/Header'
import Footer from './component/Footer'
import Layout from './component/Layout'
import Homepage from './pages/Homepage'
import Productpage from './pages/Productpage'
import Productdetail from './pages/Productdetail'

const Myroute = () => {
  return (
    <>
    <Router>
        <Routes>
            {/* <Route path ='/' element = {<First context_content ='First'/>}/>
            <Route path ='/second' element = {<Second button_content ='Second'/>}/> */}
            {/* Layout needs to wrap the pages so layout bitra pages haru ko routes rakhnu */}
            <Route path='/' element={<Layout/>}>
             <Route index element={<Homepage/>}/>
             <Route path='/product' element={<Productpage/>}/>  
              <Route path='/productdetails/:productId' element={<Productdetail/>}/>  
            </Route>  
        </Routes>
    </Router>
    </>
  )
}

export default Myroute