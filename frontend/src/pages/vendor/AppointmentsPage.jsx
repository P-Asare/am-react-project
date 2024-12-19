import { useState } from 'react'

export default function AppointmentsPage() {
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
    },
    // Add more appointments for the full view
  ])

  const handleStatusChange = (appointmentId, newStatus) => {
    console.log('Change status:', appointmentId, newStatus)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">All Appointments</h1>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-1 divide-y">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div>
                <p className="font-semibold">{appointment.clientName}</p>
                <p className="text-gray-600">{appointment.service}</p>
                <p className="text-sm text-gray-500">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={appointment.status}
                  onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                  className="rounded-lg border-gray-300 text-sm"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <button className="text-blue-600 hover:text-blue-800">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 