'use strict'

import React from 'react'
import styles from './search.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className={styles.search}>
    <input
      type='search'
      placeholder='Digite o nome do usuário no GitHub'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

export default Search
