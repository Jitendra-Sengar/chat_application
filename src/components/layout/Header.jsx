import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#1a1a1a] border-b border-gray-800">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-[#f4a7a7] text-xl font-semibold">
          Logo
        </Link>
        <nav className="flex items-center space-x-6">
          <Link to="/explore" className="text-gray-300 hover:text-white flex items-center">
            <span className="mr-2">🏠</span> Explore
          </Link>
          <Link to="/create" className="text-gray-300 hover:text-white flex items-center">
            <span className="mr-2">✏️</span> Create
          </Link>
          <Link to="/edit" className="text-gray-300 hover:text-white flex items-center">
            <span className="mr-2">⚙️</span> Edit
          </Link>
        </nav>
      </div>
      <button className="px-6 py-2 bg-[#f4a7a7] text-black rounded-full hover:bg-[#f4a7a7]/90">
        Login
      </button>
    </header>
  )
}

