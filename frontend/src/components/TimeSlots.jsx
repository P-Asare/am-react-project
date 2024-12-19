export default function TimeSlots({ selectedTime, onTimeSelect }) {
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ]

  return (
    <div className="grid grid-cols-4 gap-2">
      {timeSlots.map((time) => (
        <button
          key={time}
          onClick={() => onTimeSelect(time)}
          className={`p-2 text-center rounded ${
            selectedTime === time
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {time}
        </button>
      ))}
    </div>
  )
} 