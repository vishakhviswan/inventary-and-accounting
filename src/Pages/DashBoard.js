import React from 'react'
import NavbarHeader from '../Components/Navbar'
import Processing from '../Components/Processing'

function DashBoard() {
    return (
        <div className='dashboard_ParentDiv'>
            <NavbarHeader/>
            <h1>This is DashBoard</h1>
            <Processing/>
        </div>
    )
}

export default DashBoard
