import React from "react";

import {
    FaHome,
    FaUsers,
    FaCalendarAlt,
    FaChartBar
} from "react-icons/fa";

import { FaUserDoctor } from "react-icons/fa6";


function AdminSidebar(){

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
<FaUserDoctor/>
Doctors
</li>


<li>
<FaUsers/>
Patients
</li>


<li>
<FaCalendarAlt/>
Appointments
</li>


<li>
<FaChartBar/>
Reports
</li>


</ul>


</div>

)

}


export default AdminSidebar;