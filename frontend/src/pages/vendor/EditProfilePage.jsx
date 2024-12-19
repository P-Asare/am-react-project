import { useState } from 'react'

export default function EditProfilePage() {
  const [profile, setProfile] = useState({
    businessName: 'Style Studio',
    type: 'Hair Salon',
    email: 'contact@stylestudio.com',
    phone: '(555) 123-4567',
    address: '123 Main St',
    city: 'New York',
    description: 'Professional hair salon offering premium services',
    image: 'https://placehold.co/400x300'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Update profile:', profile)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Edit Profile</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Image */}
          <div className="flex items-center space-x-6">
            <div className="shrink-0">
              <img
                src={profile.image}
                alt="Profile"
                className="h-32 w-32 object-cover rounded-lg"
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Information */}
            <div>
              <label className="block text-gray-700 mb-2">Business Name</label>
              <input
                type="text"
                value={profile.businessName}
                onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Business Type</label>
              <select
                value={profile.type}
                onChange={(e) => setProfile({ ...profile, type: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              >
                <option value="Hair Salon">Hair Salon</option>
                <option value="Barbershop">Barbershop</option>
                <option value="Beauty Salon">Beauty Salon</option>
                <option value="Spa">Spa</option>
              </select>
            </div>

            {/* Contact Information */}
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">City</label>
              <input
                type="text"
                value={profile.city}
                onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                value={profile.description}
                onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                rows="4"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 