'use strict'

import React from 'react'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'
import styles from './app.css'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className={styles.app}>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    <div className={styles.repos_container}>
      {!!repos.length &&
        <Repos className={styles.repos} title='Repositórios:' repos={repos} />}

      {!!starred.length &&
        <Repos className={styles.starred} title='Favoritos:' repos={starred} />}
    </div>
  </div>
)

export default AppContent
