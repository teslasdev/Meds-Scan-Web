import React from 'react'
  
  import { Link } from 'react-router-dom';



  export default function Dashboard() {
    return (
      <div className="flex">
        <aside className="w-64 bg-gray-800 text-white h-screen p-6">
          <nav className="space-y-4">
            <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</Link>
            <Link to="/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">All Products</Link>
            <Link to="/add-product" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Add New Product</Link>
            <Link to="/track-products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Track Products</Link>
            <Link to="/message" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Message</Link>
            <Link to="/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Profile</Link>
            <Link to="/team-members" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Team Members</Link>
            <Link to="/support" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Support</Link>
          </nav>
        </aside>

        <main className="flex-1 p-8 bg-gray-100">
          <header className="mb-8">
            <h1 className="text-2xl font-bold">Manufacturer Dashboard</h1>
            <p className="text-sm text-gray-600">15th of August, 2024</p>
          </header>

          <section className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Sales Trend</h3>
              {/* Insert your chart component here */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Market Share</h3>
              {/* Insert your chart component here */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Top 5 Products by Sales</h3>
              {/* Insert your chart component here */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Distribution Regions</h3>
              {/* Insert your map component here */}
            </div>
          </section>

          <section className="mt-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Flowchart</h3>
              {/* Insert your flowchart component here */}
            </div>
          </section>
        </main>
      </div>
    );
  }

