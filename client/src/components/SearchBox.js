import React from 'react';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

const SearchBox = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search for a Movie!'
			></input>
		</div>
	);
};

export default SearchBox;
