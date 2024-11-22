import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import About from './About'
import Contact from './Contact'
import NoPage from '../Misc/NoPage'
import Services from './Services'

const Frontend = () => {
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='services/*' element={<Services />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
            </main>

            <Footer />
        </>
    )
}

export default Frontend
