import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=c69aa624';

const movie1 = {
	Title: 'Batman v Superman: Dawn of Justice (Ultimate Edition)',
	Year: '2016',
	imdbID: 'tt18689424',
	Type: 'movie',
	Poster:
		'https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg',
};

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies('wolverine');
	}, []);

	return (
		<div className="app">
			<h1>MovieLand</h1>
			<div className="search">
				<input
					placeholder="search for movies"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				/>
				<img
					src={searchIcon}
					alt="search"
					onClick={() => {
						searchMovies(searchTerm);
					}}
				/>
			</div>

			{movies.length > 0 ? (
				<div className="container">
					{movies.map((movie, indx) => (
						<MovieCard
							movie1={movie}
							key={indx}
						/>
					))}
				</div>
			) : (
				<div className="empty">
					<h2>No movies found!</h2>
				</div>
			)}
		</div>
	);
};

export default App;
