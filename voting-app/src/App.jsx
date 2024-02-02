import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostList from './components/PostList';

function App() {
	const [count, setCount] = useState(0);


	const handleVote = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>Voting App</h1>
			<hr />

	
		</div>
	);
}

export default App;