import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from '../src/Movies/MovieList';
import Movie from '../src/Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
	const [savedList, setSavedList] = useState([]);

	const addToSavedList = movie => {
		setSavedList([...savedList, movie]);
	};

	return (
		<div>
			<SavedList list={savedList} />
			<Route exact path="/" component={MovieList} />

			<Route
				path="/movies/:id"
				render={props => <Movie {...props} saveToList={addToSavedList} />}
			/>
		</div>
	);
};

export default App;
