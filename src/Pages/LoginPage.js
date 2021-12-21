import React from 'react'
import NavbarHeader from '../Components/Navbar'
import Login from '../containers/login/Login';


function LoginPage() {
    return (
      <div className="signIn_ParentDiv">
        <NavbarHeader />
        <div className="signIn_childDiv">
          <Login/>
        </div>
      </div>
    );
}

export default LoginPage;
