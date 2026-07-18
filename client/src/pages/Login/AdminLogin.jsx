import React from "react";
import {useNavigate} from "react-router-dom";
import {FaUserShield,FaLock,FaEnvelope} from "react-icons/fa";


function AdminLogin(){


const navigate=useNavigate();


const handleLogin=(e)=>{

e.preventDefault();

navigate("/admin/dashboard");

}



return(


<div className="login-page">


<div className="login-left">


<FaUserShield className="logo-icon"/>


<h1>
MediSphere
</h1>


<p>
Hospital administration made easier
with complete control and management.
</p>


</div>



<div className="login-right">


<div className="login-card">


<h2>
Admin Login
</h2>


<p>
Access hospital management panel.
</p>



<form onSubmit={handleLogin}>


<div className="input-box">

<FaEnvelope/>

<input
type="email"
placeholder="Admin Email"
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

<a href="/doctor-login">
Doctor Login
</a>


</div>



</div>


</div>



</div>


)

}


export default AdminLogin;