'use strict'

import React from 'react'
import pagination from 'utils/pagination'
import Page from './page'
import style from './pagination.css'

const Pagination = ({ total, activePage, pageLink, onClick }) => (
  <ul className={style.pagination}>
    {pagination({ total, activePage }).map((page, index) => (
      <li key={index} className={`${style.pagination_item} ${activePage === page ? style.active : ''}`}>
        <Page page={page} pageLink={pageLink.replace('{page}', page)} onClick={onClick} />
      </li>
    ))}
  </ul>
)

Pagination.defaultProps = {
  pageLink: '',
  activePage: 1
}

export default Pagination
