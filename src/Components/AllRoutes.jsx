import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatenewissuePage from './CreatenewissuePage'
import HomePage from './HomePage'

const AllRoutes = () => {


    return (
        <>
            <CreatenewissuePage />
            <Routes>
                <Route path='/homepage' element={<HomePage />} />
            </Routes>
        </>
    )
}

export default AllRoutes
