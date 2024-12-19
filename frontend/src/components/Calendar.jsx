import { useState } from 'react'

export default function Calendar({ selectedDate, onDateSelect }) {
  const [currentMonth] = useState(new Date())

  // Simple calendar view for demo
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i)
    return date
  })

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="grid grid-cols-7 gap-2">
        {dates.map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => onDateSelect(date)}
            className={`p-2 text-center rounded ${
              selectedDate?.toDateString() === date.toDateString()
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
} 