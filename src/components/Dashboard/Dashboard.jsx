// src/components/Dashboard.jsx

import { Link } from "react-router-dom";

const Dashboard = ({ user, posts, handleDeletePost }) => {

	const postLiEls = posts.map((post) => {
		console.log(post)
		return ( 
			<div key={post._id} className="flex flex-col justify-center w-64 bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
				<h2 className="mt-2 text-gray-500 dark:text-neutral-400">
				{post.owner?.username}
				</h2>
				<h2 className="mt-1 text-xl font-bold text-gray-800 dark:text-white">
				{post.game}
				</h2>
				<h3 className="mt-2 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
				{post.details}
				</h3>
				<h3 className="mt-2 mb-2 text-md font-medium uppercase text-gray-500 dark:text-neutral-500">
				{post.worth}
				</h3>
				{post?.owner?._id === user?._id&& (
				<div>
					<Link to={`${post._id}/edit`} className="m-2 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Edit
					</Link>
					<button onClick={() => handleDeletePost(post._id)} className="px-4 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
					Delete
					</button>
				</div>
				)}
			</div>
		)

	})

	return (
	<main>
		<div className="flex justify-evenly my-4">
		<h1 className="text-2xl font-bold">
		Welcome, {user.username}
		</h1>
		<Link to={'/create'} className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
		Add a Post
		</Link>
		</div>
		<div className="flex flex-row align-center content-center justify-center gap-2 ">
		{postLiEls}
		</div>
	</main>
	);
  };
  
  export default Dashboard;
  