import { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Calendar from '../components/Calendar'
import TimeSlots from '../components/TimeSlots'

export default function BookingPage() {
  const { vendorId } = useParams()
  const location = useLocation()
  const { isRescheduling, oldAppointment } = location.state || {}
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const handleBooking = () => {
    if (isRescheduling) {
      console.log('Rescheduling appointment:', oldAppointment.id)
      // Add logic to cancel old appointment and create new one
    } else {
      console.log('Creating new appointment')
      // Regular booking logic
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {isRescheduling ? 'Reschedule Appointment' : 'Book Appointment'}
      </h2>
      
      <div className="space-y-6">
        <Calendar 
          selectedDate={selectedDate} 
          onDateSelect={setSelectedDate} 
        />
        
        {selectedDate && (
          <TimeSlots 
            selectedTime={selectedTime}
            onTimeSelect={setSelectedTime}
          />
        )}

        {selectedDate && selectedTime && (
          <button
            onClick={handleBooking}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            {isRescheduling ? 'Reschedule' : 'Confirm Booking'}
          </button>
        )}
      </div>
    </div>
  )
} 