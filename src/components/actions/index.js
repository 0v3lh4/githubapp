'use strict'

import React from 'react'
import styles from './actions.css'

const Actions = ({ getRepos, getStarred }) => (
  <div className={styles.actions}>
    <button onClick={getRepos}>Ver repositórios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
)

export default Actions
