import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ClientDashboard() {
  const navigate = useNavigate()
  const [upcomingAppointments] = useState([
    {
      id: 1,
      vendorName: "Style Studio",
      service: "Haircut",
      date: "2024-03-20",
      time: "10:00",
      status: "confirmed",
      vendorId: 1
    },
    {
      id: 2,
      vendorName: "Classic Cuts",
      service: "Beard Trim",
      date: "2024-03-25",
      time: "14:00",
      status: "pending",
      vendorId: 2
    }
  ])

  const [pastAppointments] = useState([
    {
      id: 3,
      vendorName: "Style Studio",
      service: "Hair Coloring",
      date: "2024-02-15",
      time: "11:00",
      status: "completed",
      vendorId: 1
    }
  ])

  const [favoriteVendors] = useState([
    {
      id: 1,
      name: "Style Studio",
      type: "Hair Salon",
      rating: 4.8,
      image: "https://placehold.co/100x100",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Classic Cuts",
      type: "Barbershop",
      rating: 4.6,
      image: "https://placehold.co/100x100",
      location: "Brooklyn, NY"
    }
  ])

  const handleCancelAppointment = (appointmentId) => {
    console.log('Cancel appointment:', appointmentId)
  }

  const handleRescheduleAppointment = (appointmentId) => {
    const appointment = upcomingAppointments.find(app => app.id === appointmentId)
    navigate(`/book/${appointment.vendorId}`, { 
      state: { 
        isRescheduling: true,
        oldAppointment: appointment
      }
    })
  }

  const handleRemoveFavorite = (vendorId) => {
    console.log('Remove from favorites:', vendorId)
  }

  const AppointmentCard = ({ appointment, showActions = true }) => (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold">{appointment.vendorName}</h3>
          <p className="text-gray-600">{appointment.service}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            appointment.status === 'confirmed'
              ? 'bg-green-100 text-green-800'
              : appointment.status === 'completed'
              ? 'bg-gray-100 text-gray-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {appointment.status}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-3">
        {appointment.date} at {appointment.time}
      </p>
      {showActions && (
        <div className="flex space-x-3">
          <button
            onClick={() => handleRescheduleAppointment(appointment.id)}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Reschedule
          </button>
          <button
            onClick={() => handleCancelAppointment(appointment.id)}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome Back, John!</h1>
        <p className="text-gray-600">Manage your appointments and bookings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Appointments */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Appointments */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Book New
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingAppointments.length > 0 ? (
                upcomingAppointments.map(appointment => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))
              ) : (
                <p className="text-gray-500">No upcoming appointments</p>
              )}
            </div>
          </div>

          {/* Past Appointments */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
            <div className="space-y-4">
              {pastAppointments.map(appointment => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  showActions={false}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Favorite Vendors */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Favorite Vendors</h2>
            <div className="space-y-4">
              {favoriteVendors.map((vendor) => (
                <div
                  key={vendor.id}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{vendor.name}</h3>
                      <p className="text-gray-600 text-sm">{vendor.type}</p>
                      <p className="text-gray-500 text-sm">{vendor.location}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">{vendor.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      to={`/book/${vendor.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Book Now
                    </Link>
                    <button
                      onClick={() => handleRemoveFavorite(vendor.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button
                onClick={() => navigate('/client/profile')}
                className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <p className="font-medium">Edit Profile</p>
                <p className="text-sm text-gray-600">Update your information</p>
              </button>
              <button
                onClick={() => navigate('/client/notifications')}
                className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-gray-600">Manage your preferences</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 