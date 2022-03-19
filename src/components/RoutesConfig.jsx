import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import PageNotFound from '../pages/PageNotFound'
const RoutesConfig = () => {
    return (
        
        <Routes>
            <Route path="/react-dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default RoutesConfig
