import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from '../components/Layout'
import Apropos from '../Pages/Apropos'
import Logement from '../Pages/Logement'
import Home from '../Pages/Home'

function Path() {
  return (
    <BrowserRouter >
    <Layout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/a-propos" element={<Apropos/>}/>
            {/* <Route path="/logement" element={<Logement/>}/> */}
            {/*<Route path="" element={}/>  */}
        </Routes>
    </Layout>
    </BrowserRouter >
  )
}

export default Path