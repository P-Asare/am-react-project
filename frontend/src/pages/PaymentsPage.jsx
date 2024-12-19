import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PaymentsPage() {
  const navigate = useNavigate()
  const [paymentMethods] = useState([
    {
      id: 1,
      type: 'credit',
      last4: '4242',
      expiry: '12/24',
      isDefault: true
    },
    {
      id: 2,
      type: 'credit',
      last4: '5555',
      expiry: '08/25',
      isDefault: false
    }
  ])

  const handleAddCard = () => {
    console.log('Add new card')
  }

  const handleRemoveCard = (id) => {
    console.log('Remove card:', id)
  }

  const handleSetDefault = (id) => {
    console.log('Set default:', id)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Payment Methods</h1>
        <button
          onClick={() => navigate('/client/dashboard')}
          className="text-blue-600 hover:text-blue-800"
        >
          Back to Dashboard
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">
                    {method.type === 'credit' ? '💳' : '🏦'}
                  </div>
                  <div>
                    <p className="font-semibold">
                      •••• {method.last4}
                      {method.isDefault && (
                        <span className="ml-2 text-sm text-green-600">Default</span>
                      )}
                    </p>
                    <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {!method.isDefault && (
                    <button
                      onClick={() => handleSetDefault(method.id)}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Set as Default
                    </button>
                  )}
                  <button
                    onClick={() => handleRemoveCard(method.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleAddCard}
            className="mt-6 w-full p-4 border-2 border-dashed rounded-lg text-center text-gray-600 hover:text-gray-800 hover:border-gray-400 transition-colors"
          >
            + Add New Payment Method
          </button>
        </div>
      </div>
    </div>
  )
} 