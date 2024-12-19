import { Link } from 'react-router-dom'

export default function VendorCard({ vendor }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={vendor.image} 
        alt={vendor.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{vendor.name}</h3>
        <p className="text-gray-600">{vendor.type}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">★</span>
          <span className="ml-1">{vendor.rating}</span>
        </div>
        <Link 
          to={`/book/${vendor.id}`}
          className="mt-4 block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
} 