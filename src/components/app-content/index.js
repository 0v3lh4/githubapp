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
  getStarred,
  handlePagination
}) => (
  <div className={styles.app}>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    <div className={styles.repos_container}>
      {!!repos.repos.length &&
        <Repos
          className={styles.repos}
          title='Repositórios:'
          repos={repos.repos}
          pagination={repos.pagination}
          handlePagination={(clicked) => handlePagination('repos', clicked)} />}

      {!!starred.repos.length &&
        <Repos className={styles.starred}
          title='Favoritos:'
          repos={starred.repos}
          pagination={starred.pagination}
          handlePagination={(clicked) => handlePagination('starred', clicked)} />}
    </div>
  </div>
)

export default AppContent
