import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaLock, FaEnvelope } from "react-icons/fa";


function DoctorLogin(){

const navigate = useNavigate();


const handleLogin=(e)=>{

e.preventDefault();

navigate("/doctor/dashboard");

}



return(

<div className="login-page">


<div className="login-left">


<FaUserMd className="logo-icon"/>


<h1>MediSphere</h1>


<p>
Empowering doctors with smart tools
to manage patients, appointments and healthcare records.
</p>


</div>



<div className="login-right">


<div className="login-card">


<h2>
Doctor Login
</h2>


<p>
Welcome Doctor, login to access your dashboard.
</p>



<form onSubmit={handleLogin}>


<div className="input-box">

<FaEnvelope/>

<input
type="email"
placeholder="Doctor Email"
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

<a href="/">
Patient Login
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


export default DoctorLogin;