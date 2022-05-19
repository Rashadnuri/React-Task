import React from 'react'

const SearchBar = ({ onSubmit }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // getting form
    const form = e.target;

    // getting form's data
    const formData = new FormData(form);
    const searchString = formData.get('search');

    // use parent's handler function to setting his state.
    onSubmit(searchString);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='search' type='search' required />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar