import React from 'react';

function Filter({ onFilterChange, filterType, filterValue }) {
  const handleTypeChange = (e) => {
    onFilterChange(e.target.value, filterValue);
  };

  const handleValueChange = (e) => {
    onFilterChange(filterType, e.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label>
        Filter by:
        <select value={filterType} onChange={handleTypeChange} style={{ marginLeft: '10px', marginRight: '10px' }}>
          <option value="title">Title</option>
          <option value="rating">Rating</option>
        </select>
      </label>
      <input
        type={filterType === 'rating' ? 'number' : 'text'}
        placeholder={`Search by ${filterType}`}
        value={filterValue}
        onChange={handleValueChange}
        style={{ marginLeft: '10px' }}
      />
    </div>
  );
}

export default Filter;