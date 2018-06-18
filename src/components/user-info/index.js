'use strict'

import React from 'react'
import styles from './user-info.css'

const UserInfo = ({ userinfo }) => (
  <div className={styles.user_info}>
    <img src={userinfo.photo} />

    <h1>
      <a href={`https://github.com/${userinfo.login}`}>
        {userinfo.username}
      </a>
    </h1>

    <ul className={styles.repos_info}>
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

export default UserInfo
