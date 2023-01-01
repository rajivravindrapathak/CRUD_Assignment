import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatenewissuePage from './CreatenewissuePage'
import HomePage from './HomePage'
import Navbar from './Navbar'

const AllRoutes = () => {


    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/homepage' element={<HomePage />}/>
                <Route path='/' element={<CreatenewissuePage />} />
            </Routes>
        </>
    )
}

export default AllRoutes
