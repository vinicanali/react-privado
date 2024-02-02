import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
	return(
		<div>
			<h1>Lista de Posts</h1>
			{posts.map(post => (
				<Post key={post.id} title={post.title} content={post.content} />
			))}
		</div>
	);
};

export default PostList;