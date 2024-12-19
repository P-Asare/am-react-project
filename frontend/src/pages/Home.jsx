import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const isAuthenticated = false // Change this based on your authentication logic

  const handleLoginRedirect = () => {
    navigate('/login')
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Spa'd</h1>
        <p className="text-lg text-gray-600">Your one-stop solution for booking appointments with your favorite vendors.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Join Us Today!</h2>
          <p className="text-gray-600 mb-4">Create an account to manage your appointments and access exclusive offers.</p>
          <button
            onClick={handleLoginRedirect}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Already a Member?</h2>
          <p className="text-gray-600 mb-4">Log in to your account to view and manage your appointments.</p>
          <button
            onClick={handleLoginRedirect}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>

      {isAuthenticated ? (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold">Dashboard Links</h2>
          <p className="text-gray-600">You can access your dashboard here:</p>
          <div className="space-y-2 mt-4">
            <button
              onClick={() => navigate('/client/dashboard')}
              className="text-blue-600 hover:text-blue-800"
            >
              Go to Client Dashboard
            </button>
            <button
              onClick={() => navigate('/vendor/dashboard')}
              className="text-blue-600 hover:text-blue-800"
            >
              Go to Vendor Dashboard
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-8 text-center text-gray-600">Please log in to access your dashboard.</p>
      )}
    </div>
  )
} 