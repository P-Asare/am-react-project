import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function VendorDashboard() {
  const navigate = useNavigate()
  const [appointments] = useState([
    {
      id: 1,
      clientName: "John Doe",
      service: "Haircut",
      date: "2024-03-20",
      time: "10:00",
      status: "confirmed"
    },
    {
      id: 2,
      clientName: "Jane Smith",
      service: "Hair Styling",
      date: "2024-03-20",
      time: "14:00",
      status: "pending"
    }
  ])

  const handleEditProfile = () => {
    navigate('/vendor/profile/edit')
  }

  const handleManageAppointment = (appointmentId) => {
    // Navigate to appointment details page
    navigate(`/vendor/appointments/${appointmentId}`)
  }

  const handleUpdateTimes = () => {
    // For now, just log the action
    console.log('Update times clicked')
  }

  const handleManageServices = () => {
    // For now, just log the action
    console.log('Manage services clicked')
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Vendor Dashboard</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://placehold.co/100x100"
              alt="Vendor profile"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="font-semibold">Style Studio</h2>
              <p className="text-gray-600">Hair Salon</p>
            </div>
          </div>
          <button 
            onClick={handleEditProfile}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-gray-500">Today's Appointments</h3>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-gray-500">Total Revenue</h3>
          <p className="text-2xl font-bold">$1,240</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-gray-500">Rating</h3>
          <p className="text-2xl font-bold">4.8 ★</p>
        </div>
      </div>

      {/* Appointments Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
          <Link 
            to="/vendor/appointments"
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            View All
          </Link>
        </div>
        <div className="divide-y">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div>
                <p className="font-semibold">{appointment.clientName}</p>
                <p className="text-gray-600">{appointment.service}</p>
                <p className="text-sm text-gray-500">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    appointment.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {appointment.status}
                </span>
                <button 
                  onClick={() => handleManageAppointment(appointment.id)}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <button 
          onClick={() => navigate('/vendor/schedule')}
          className="p-4 bg-white rounded-lg shadow text-left hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-semibold">Update Available Times</h3>
          <p className="text-gray-600 text-sm">Manage your working hours and breaks</p>
        </button>
        <button 
          onClick={() => navigate('/vendor/services')}
          className="p-4 bg-white rounded-lg shadow text-left hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-semibold">Manage Services</h3>
          <p className="text-gray-600 text-sm">Add or edit your service offerings</p>
        </button>
      </div>
    </div>
  )
} 