import { Link } from "react-router-dom"

const NavBar = ({ user, handleLogout}) => {
	return (
	<>
		{user ? (
			<nav className="bg-gray-800">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto p-4">
				<ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
					<li>
					<Link to="/" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
					Home
					</Link>
					</li>
					<li>
					<Link to={`/${user._id}`} className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
					Profile
					</Link>
					</li>
					<li>
					<Link onClick={() => handleLogout()} to='' className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
					Sign Out
					</Link>
					</li>
				</ul>
				</div>
			</nav>
		): (
			<nav className="bg-gray-800">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto p-4">
			<ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
				<li>
				<Link to="/signin" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
				Sign in
				</Link>
				</li>
				<li>
				<Link to='/signup' className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
				Sign Up
				</Link>
				</li>
			</ul>
			</div>
		</nav>
		)}



		
	</>
	)
  }
  export default NavBar