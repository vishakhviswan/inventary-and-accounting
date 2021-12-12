import React from 'react'
import NavbarHeader from '../Components/Navbar'
import AddUsers from '../containers/AddUsers';
import Signup from '../containers/Signup';

function SignIn() {
    return (
      <div className="signIn_ParentDiv">
        <NavbarHeader />
        <div className="signIn_childDiv">
          <AddUsers/>
        </div>
      </div>
    );
}

export default SignIn
