import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

function Layout() {
    return (
        <div>
            <Header/>
            <div><Outlet /></div>
            <div>Footer</div>
        </div>
    )
}

export default Layout