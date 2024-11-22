import React from 'react'
import Design from './Designing'
import Designing from './Designing'
import Development from './Development'
import Marketing from './Marketing'
import { Route, Routes } from 'react-router-dom'

const Services = () => {
    return (
        <>

            <Routes>
                <Route path='designing' element={<Designing />} />
                <Route path='development' element={<Development />} />
                <Route path='marketing' element={<Marketing />} />
            </Routes>


        </>
    )
}

export default Services
