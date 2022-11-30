import { useEffect } from 'react';
import './App.css';

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=fe704b92`;

function App() {
	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		console.log(data.Search);
	};

	useEffect(() => {
		searchMovies('Spiderman');
	}, []);
	return (
		<div className='App'>
			<h1>Movie Library</h1>
		</div>
	);
}

export default App;
