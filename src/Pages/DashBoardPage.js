// ********New**********
import React from 'react'

import NavbarHeader from '../Components/Navbar'
import DashBoard from '../containers/DashBoard'


function DashBoardPage() {
    
    
    return (
        <div className='dashboard_ParentDiv'>
            <NavbarHeader/>
            <DashBoard/>
        </div>
    )
    
}


export default DashBoardPage
