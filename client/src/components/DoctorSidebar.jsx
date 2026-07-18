import React from "react";
import {
FaHome,
FaUsers,
FaCalendarCheck,
FaPrescription,
FaUser
} from "react-icons/fa";


function DoctorSidebar(){

return(

<div className="sidebar">

<h2>
MediSphere
</h2>


<ul>

<li>
<FaHome/>
Dashboard
</li>


<li>
<FaUsers/>
Patients
</li>


<li>
<FaCalendarCheck/>
Appointments
</li>


<li>
<FaPrescription/>
Prescriptions
</li>


<li>
<FaUser/>
Profile
</li>


</ul>


</div>

)

}

export default DoctorSidebar;