'use strict'

import React from 'react'
import styles from './repos.css'

const Repos = ({ className, title, repos }) => (
  <div className={`${styles.repos_list} ${className}`}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

export default Repos
