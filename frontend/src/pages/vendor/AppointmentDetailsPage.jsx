import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function AppointmentDetailsPage() {
  const { appointmentId } = useParams()
  const navigate = useNavigate()
  const [appointment] = useState({
    id: appointmentId,
    clientName: "John Doe",
    service: "Haircut",
    date: "2024-03-20",
    time: "10:00",
    status: "confirmed",
    email: "john@example.com",
    phone: "(555) 123-4567",
    notes: "First time client"
  })

  const handleStatusChange = (newStatus) => {
    console.log('Update status:', newStatus)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Appointment Details</h1>
        <button
          onClick={() => navigate('/vendor/appointments')}
          className="text-blue-600 hover:text-blue-800"
        >
          Back to Appointments
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold mb-4">Client Information</h2>
            <div className="space-y-2">
              <p><span className="text-gray-600">Name:</span> {appointment.clientName}</p>
              <p><span className="text-gray-600">Email:</span> {appointment.email}</p>
              <p><span className="text-gray-600">Phone:</span> {appointment.phone}</p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Appointment Details</h2>
            <div className="space-y-2">
              <p><span className="text-gray-600">Service:</span> {appointment.service}</p>
              <p><span className="text-gray-600">Date:</span> {appointment.date}</p>
              <p><span className="text-gray-600">Time:</span> {appointment.time}</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-semibold mb-4">Status</h2>
            <select
              value={appointment.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="w-full md:w-auto px-4 py-2 border rounded-lg"
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {appointment.notes && (
            <div className="md:col-span-2">
              <h2 className="font-semibold mb-4">Notes</h2>
              <p className="text-gray-600">{appointment.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 