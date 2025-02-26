import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <div className="search-page">
      <h2>Search Results</h2>
      {query ? (
        <p>You searched for: {query}</p>
      ) : (
        <p>Please enter a search query.</p>
      )}
    </div>
  );
};

export default SearchPage;