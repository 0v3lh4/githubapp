'use strict'

import React from 'react'
import Pagination from 'components/pagination'
import styles from './repos.css'

const Repos = ({ className, title, repos, pagination, handlePagination }) => (
  <div className={`${styles.repos_list} ${className}`}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
    <Pagination total={pagination.total} activePage={pagination.activePage} onClick={handlePagination} />
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: {}
}

export default Repos
