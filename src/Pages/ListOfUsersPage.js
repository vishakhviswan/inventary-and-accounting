import React from 'react'
import NavbarHeader from '../Components/Navbar'
import UsersList from '../containers/UsersList'

function ListOfUsersPage() {
    return (
        <div className='listOfUsers_ParentDiv'>
            <NavbarHeader/>
            <UsersList/>
        </div>
    )
}

export default ListOfUsersPage
