// navigation search component
import React, { Componet } from 'react';
import { Input } from '11-common';

const Search = ({ onChange, onEnter }) => (
  <div className="search input">
    <span className="icon search" />
    <Input onChange={onChange} onEnter={onEnter} />
  </div>
);

export default Search;
