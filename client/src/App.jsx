import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Login Pages
import PatientLogin from "./pages/Login/PatientLogin";
import DoctorLogin from "./pages/Login/DoctorLogin";
import AdminLogin from "./pages/Login/AdminLogin";

// Layouts
import PatientLayout from "./layouts/PatientLayout";
import DoctorLayout from "./layouts/DoctorLayout";
import AdminLayout from "./layouts/AdminLayout";

// Patient Pages
import PatientDashboard from "./pages/Patient/PatientDashboard";
import BookAppointment from "./pages/Patient/BookAppointment";
import MyAppointments from "./pages/Patient/MyAppointments";
import MedicalHistory from "./pages/Patient/MedicalHistory";
import Profile from "./pages/Patient/Profile";

// Doctor Pages
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import Patients from "./pages/Doctor/Patients";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import Prescription from "./pages/Doctor/Prescription";

// Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageDoctors from "./pages/Admin/ManageDoctors";
import ManagePatients from "./pages/Admin/ManagePatients";
import Appointments from "./pages/Admin/Appointments";
import Reports from "./pages/Admin/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<PatientLogin />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Patient */}
        <Route path="/patient" element={<PatientLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<PatientDashboard />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="my-appointments" element={<MyAppointments />} />
          <Route path="medical-history" element={<MedicalHistory />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Doctor */}
        <Route path="/doctor" element={<DoctorLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="patients" element={<Patients />} />
          <Route path="appointments" element={<DoctorAppointments />} />
          <Route path="prescriptions" element={<Prescription />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="doctors" element={<ManageDoctors />} />
          <Route path="patients" element={<ManagePatients />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="reports" element={<Reports />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;