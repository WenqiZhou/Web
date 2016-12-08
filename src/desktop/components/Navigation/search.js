// navigation search component
import React, { Componet } from 'react';
import Input from '../../../common/components/BaseInput';

const Search = ({ onChange, onEnter }) => (
  <div className="search input">
    <span className="icon search" />
    <Input onChange={onChange} onEnter={onEnter} />
  </div>
);

export default Search;
