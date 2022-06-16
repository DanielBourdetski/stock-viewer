import React, { useState } from 'react';

import { actions } from '../services/api';

const SearchInputs = props => {
  const [selectedSearchBy, setSelectedSearchBy] = useState(actions.byName);
  const [searchTerm, setSearchTerm] = useState('');

  const { onSearchHandler } = props;

  const onSelectChange = e => {
    const selectedValue = e.target.value;
    setSelectedSearchBy(selectedValue);
  };

  const onSearch = () => {
    const search = { term: searchTerm, searchBy: selectedSearchBy };
    onSearchHandler(search);
  };

  const onInputChange = e => {
    const currentTerm = e.target.value;
    setSearchTerm(currentTerm);
  };

  return (
    <div className={`${props.className} mx-auto`}>
      <div className="input-group">
        <div>
          <select value={selectedSearchBy} className="form-select" onChange={onSelectChange}>
            <option value={actions.byName}>Company Name:</option>
            <option value={actions.byTicker}>Company Symbol:</option>
            {/* <option value="2">Two</option>
            <option value="3">Three</option> */}
          </select>
        </div>
        <input type="text" className="form-control" onChange={onInputChange} value={searchTerm} />
        <button className="btn btn-outline-secondary" type="button" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInputs;
