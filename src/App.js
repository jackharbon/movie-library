import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import { useState } from 'react';
import favicon from './favicon.ico';

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=fe704b92`;

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		setMovies(data.Search);
	};

	const handleSubmitSearch = (e) => {
		e.preventDefault();
		searchMovies(searchTerm);
		setSearchTerm('');
	};

	useEffect(() => {
		searchMovies('Superman');
	}, []);

	return (
		<div className='app'>
			<img src={favicon} alt='favicon' />
			<h1>Movie Library</h1>
			<form onSubmit={handleSubmitSearch} className='search'>
				<input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
				<img src={SearchIcon} alt='Search for movies' onClick={() => searchMovies(searchTerm)} />
			</form>
			{movies?.length > 0 ? (
				<div className='container'>
					{movies.map((movie) => (
						<MovieCard movie={movie} />
					))}
				</div>
			) : (
				<div className='movie'>
					<div>
						<p>There's any movies with similar title</p>
					</div>
					<div>
						<img src={'https://moviereelist.com/wp-content/uploads/2019/07/poster-placeholder.jpg'} alt='No movies found' />
					</div>
					<div>
						<span>Please search again</span>
						<h3>No movies found</h3>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
