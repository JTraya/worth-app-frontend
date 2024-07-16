// src/components/Dashboard.jsx

import { Link } from "react-router-dom";

const Dashboard = ({ user, posts, handleDeletePost }) => {

	const postLiEls = posts.map((post) => {
		console.log(post)
		return ( 
			<div key={post._id}>
				<h2>{post.owner?.username}</h2>
				<h2>{post.game}</h2>
				<h3>{post.details}</h3>
				<h3>{post.worth}</h3>
				{post?.owner?._id === user?._id&& (
				<>
					<Link to={`${post._id}/edit`}>Edit</Link>
					<button onClick={() => handleDeletePost(post._id)}>Delete</button>
				</>
				)}
			</div>
		)

	})

	return (
	<main>
		<h1>Welcome, {user.username}</h1>
		<Link to={'/create'}>Add a Post</Link>
		<div>{postLiEls}</div>
	</main>
	);
  };
  
  export default Dashboard;
  