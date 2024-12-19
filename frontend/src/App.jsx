import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import VendorDashboard from './pages/VendorDashboard'
import ClientDashboard from './pages/ClientDashboard'
import BookingPage from './pages/BookingPage'
import AppointmentsPage from './pages/vendor/AppointmentsPage'
import EditProfilePage from './pages/vendor/EditProfilePage'
import ManageServicesPage from './pages/vendor/ManageServicesPage'
import ManageSchedulePage from './pages/vendor/ManageSchedulePage'
import AppointmentDetailsPage from './pages/vendor/AppointmentDetailsPage'
import Footer from './components/Footer'
import ClientProfilePage from './pages/ClientProfilePage'
import NotificationsPage from './pages/NotificationsPage'

export default function App() {
  const isAuthenticated = true

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Vendor Routes */}
            <Route path="/vendor">
              <Route 
                path="dashboard" 
                element={isAuthenticated ? <VendorDashboard /> : <Navigate to="/login" />} 
              />
              <Route 
                path="appointments" 
                element={isAuthenticated ? <AppointmentsPage /> : <Navigate to="/login" />} 
              />
              <Route 
                path="profile/edit" 
                element={isAuthenticated ? <EditProfilePage /> : <Navigate to="/login" />} 
              />
              <Route 
                path="services" 
                element={isAuthenticated ? <ManageServicesPage /> : <Navigate to="/login" />} 
              />
              <Route 
                path="schedule" 
                element={isAuthenticated ? <ManageSchedulePage /> : <Navigate to="/login" />} 
              />
              <Route 
                path="appointments/:appointmentId" 
                element={isAuthenticated ? <AppointmentDetailsPage /> : <Navigate to="/login" />} 
              />
            </Route>

            {/* Client Routes */}
            <Route path="/client">
              <Route
                path="dashboard"
                element={isAuthenticated ? <ClientDashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="profile"
                element={isAuthenticated ? <ClientProfilePage /> : <Navigate to="/login" />}
              />
              <Route
                path="notifications"
                element={isAuthenticated ? <NotificationsPage /> : <Navigate to="/login" />}
              />
            </Route>

            <Route 
              path="/book/:vendorId" 
              element={isAuthenticated ? <BookingPage /> : <Navigate to="/login" />} 
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}