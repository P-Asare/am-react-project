import { useState } from 'react'

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const TIME_SLOTS = Array.from({ length: 24 }, (_, i) => 
  `${String(i).padStart(2, '0')}:00`
)

export default function ManageSchedulePage() {
  const [schedule, setSchedule] = useState({
    Monday: { isOpen: true, start: '09:00', end: '17:00', breaks: [] },
    Tuesday: { isOpen: true, start: '09:00', end: '17:00', breaks: [] },
    Wednesday: { isOpen: true, start: '09:00', end: '17:00', breaks: [] },
    Thursday: { isOpen: true, start: '09:00', end: '17:00', breaks: [] },
    Friday: { isOpen: true, start: '09:00', end: '17:00', breaks: [] },
    Saturday: { isOpen: true, start: '10:00', end: '15:00', breaks: [] },
    Sunday: { isOpen: false, start: '09:00', end: '17:00', breaks: [] }
  })

  const handleDayToggle = (day) => {
    setSchedule(prev => ({
      ...prev,
      [day]: { ...prev[day], isOpen: !prev[day].isOpen }
    }))
  }

  const handleTimeChange = (day, field, value) => {
    setSchedule(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }))
  }

  const handleAddBreak = (day) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        breaks: [...prev[day].breaks, { start: '12:00', end: '13:00' }]
      }
    }))
  }

  const handleRemoveBreak = (day, index) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        breaks: prev[day].breaks.filter((_, i) => i !== index)
      }
    }))
  }

  const handleSave = () => {
    console.log('Save schedule:', schedule)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Manage Schedule</h1>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 space-y-6">
          {DAYS_OF_WEEK.map((day) => (
            <div key={day} className="border-b last:border-0 pb-6 last:pb-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={schedule[day].isOpen}
                      onChange={() => handleDayToggle(day)}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 font-semibold">{day}</span>
                  </label>
                </div>
                {schedule[day].isOpen && (
                  <button
                    onClick={() => handleAddBreak(day)}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Add Break
                  </button>
                )}
              </div>

              {schedule[day].isOpen && (
                <div className="ml-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Open</label>
                      <select
                        value={schedule[day].start}
                        onChange={(e) => handleTimeChange(day, 'start', e.target.value)}
                        className="rounded-lg border-gray-300 text-sm"
                      >
                        {TIME_SLOTS.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Close</label>
                      <select
                        value={schedule[day].end}
                        onChange={(e) => handleTimeChange(day, 'end', e.target.value)}
                        className="rounded-lg border-gray-300 text-sm"
                      >
                        {TIME_SLOTS.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {schedule[day].breaks.map((breakTime, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <select
                          value={breakTime.start}
                          onChange={(e) => handleTimeChange(day, `breaks.${index}.start`, e.target.value)}
                          className="rounded-lg border-gray-300 text-sm"
                        >
                          {TIME_SLOTS.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        <span>to</span>
                        <select
                          value={breakTime.end}
                          onChange={(e) => handleTimeChange(day, `breaks.${index}.end`, e.target.value)}
                          className="rounded-lg border-gray-300 text-sm"
                        >
                          {TIME_SLOTS.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                      <button
                        onClick={() => handleRemoveBreak(day, index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 