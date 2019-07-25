import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {
        "search_query" : "barcelona",
        "formatted_query" : "Barcelona, Spain",
        "latitude" : "41.3850639",
        "longitude" : "2.1734035"
      },
      // results: []
    }
  }

  searchEntered = query => {
    alert(query)
    // use that query to hit all the APIs using Superagent
  }

  render() {
    return (
      <>
        <Header />
        <SearchForm handleSubmit={this.searchEntered} />
        <Map />
        <SearchResults />
      </>
    );
  }
}

export default App;
