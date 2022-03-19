import React,{ useEffect } from 'react'
import './layout.css'
import Sidebar from '../sidebar/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from '../RoutesConfig'
import TopNav from '../topnav/TopNav'

import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'
const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))
        dispatch(ThemeAction.setColor(colorClass))

    }, [dispatch])
    return (
        <BrowserRouter>
           
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar />
                    <div className="layout-content">
                        <TopNav />
                        <div className="layout-content-main">
                            <RoutesConfig />
                        </div>
                    </div>
                </div>
               
        </BrowserRouter>
    )
}

export default Layout
