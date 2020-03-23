import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = props => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const getMovies = () => {
			axios
				.get('http://localhost:5000/api/movies')
				.then(response => {
					setMovies(response.data);
				})
				.catch(error => {
					console.error('Server Error', error);
				});
		};

		getMovies();
	}, []);

	return (
		<div className="movie-list">
			{/* {console.log(props)} */}
			{movies.map(movie => (
				<Link to={`/movies/${movie.id}`} key={movie.id}>
					<MovieCard match={props.match} movie={movie} />
				</Link>
			))}
		</div>
	);
};

// function MovieDetails({ match }) {
// 	return <MovieCard />;
// }

export default MovieList;
