import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js';

function App() {
  return (
    <>
      <Header />
      <SearchForm />
      <Map />
      <SearchResults />
    </>
  );
}

export default App;
