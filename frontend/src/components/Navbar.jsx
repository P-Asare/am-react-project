import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const isAuthenticated = true

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl">Spa'd</Link>
          
          <div className="flex space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/client/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Client Dashboard
                </Link>
                <Link to="/vendor/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Vendor Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Login</Link>
                <Link to="/register" className="text-gray-600 hover:text-gray-900 transition-colors">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 