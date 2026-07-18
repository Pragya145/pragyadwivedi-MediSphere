import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaHeartbeat } from "react-icons/fa";

function PatientLogin(){

const navigate = useNavigate();

const handleLogin=(e)=>{
    e.preventDefault();
    navigate("/patient/dashboard");
}


return(

<div className="login-page">

    <div className="login-left">

        <FaHeartbeat className="logo-icon"/>

        <h1>MediSphere</h1>

        <p>
        Your digital healthcare companion.
        Manage appointments, medical records
        and consultations easily.
        </p>

    </div>


    <div className="login-right">

        <div className="login-card">

        <h2>Patient Login</h2>

        <p>
        Welcome back! Please login to continue.
        </p>


        <form onSubmit={handleLogin}>


        <div className="input-box">

        <FaUser/>

        <input
        type="email"
        placeholder="Email Address"
        />

        </div>


        <div className="input-box">

        <FaLock/>

        <input
        type="password"
        placeholder="Password"
        />

        </div>
        <div className="options">

<label>
<input type="checkbox"/>
 Remember me
</label>

<a href="#">
Forgot Password?
</a>

</div>


        <button>
            Login
        </button>


        </form>


        <div className="switch-login">

        <a href="/doctor-login">
        Doctor Login
        </a>

        |

        <a href="/admin-login">
        Admin Login
        </a>

        </div>


        </div>

    </div>


</div>


)

}

export default PatientLogin;