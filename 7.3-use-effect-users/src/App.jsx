import { useEffect, useState } from 'react';

function App() {
	const [users, setUsers] = useState([]);
	const [searchValue, setSearchValue] = useState('true');

	function handleSearch(event) {
		const { value } = event.target;

		setSearchValue(value);
	}

	useEffect(() => {
		async function fetchUsers() {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/users');
				const data = await response.json();

        console.log('DATA', data);
        
        setLoading(false);

				setUsers(data);
			} catch (error) {
				console.log('ERROR ::', error.message);
			}
		}

		setTimeout(() => fetchUsers(), 5000);
	}, []);

	const filteredUsers = users.filter(user => {
		return user.name.toLowerCase().includes(searchValue.toLowerCase());
	});

	return (
		<div className='container'>
			<h1>Users List</h1>

			<label>Search Users</label>
			<input type='text' onChange={handleSearch} value={searchValue} />

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
				</thead>

        <tbody>
          {loading && (
            <tr>
              <td colSpan={3}>Loading...</td>
            </tr>
          )}
					{filteredUsers.map(user => {
						return (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default App;
