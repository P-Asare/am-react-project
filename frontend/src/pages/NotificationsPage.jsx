import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotificationsPage() {
  const navigate = useNavigate()
  const [preferences, setPreferences] = useState({
    appointmentReminders: {
      upcoming: true,
      statusChange: true,
      reminderTime: '24' // hours before appointment
    },
    general: {
      newFeatures: true,
      serviceUpdates: true
    }
  })

  const handleSave = () => {
    console.log('Save preferences:', preferences)
    navigate('/client/dashboard')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Notification Preferences</h1>
        <button
          onClick={() => navigate('/client/dashboard')}
          className="text-blue-600 hover:text-blue-800"
        >
          Back to Dashboard
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 space-y-8">
          {/* Appointment Notifications */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Appointment Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.appointmentReminders.upcoming}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      appointmentReminders: {
                        ...preferences.appointmentReminders,
                        upcoming: e.target.checked
                      }
                    })}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2">Upcoming Appointments</span>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.appointmentReminders.statusChange}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      appointmentReminders: {
                        ...preferences.appointmentReminders,
                        statusChange: e.target.checked
                      }
                    })}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2">Status Changes</span>
                </label>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Reminder Time</label>
                <select
                  value={preferences.appointmentReminders.reminderTime}
                  onChange={(e) => setPreferences({
                    ...preferences,
                    appointmentReminders: {
                      ...preferences.appointmentReminders,
                      reminderTime: e.target.value
                    }
                  })}
                  className="w-full md:w-auto px-4 py-2 border rounded-lg"
                >
                  <option value="1">1 hour before</option>
                  <option value="2">2 hours before</option>
                  <option value="24">24 hours before</option>
                  <option value="48">48 hours before</option>
                </select>
              </div>
            </div>
          </div>

          {/* General Notifications */}
          <div>
            <h2 className="text-lg font-semibold mb-4">General Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.general.newFeatures}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      general: {
                        ...preferences.general,
                        newFeatures: e.target.checked
                      }
                    })}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2">New Features & Updates</span>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.general.serviceUpdates}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      general: {
                        ...preferences.general,
                        serviceUpdates: e.target.checked
                      }
                    })}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2">Service Updates</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-6">
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 