import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {}
    }
  }
  
  render() {
    return (
      <>
        <Header />
        <SearchForm />
        <Map />
        <SearchResults />
      </>
    );
  }
}

export default App;
