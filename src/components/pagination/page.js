import React from 'react'
import style from './pagination.css'

const Page = ({page, pageLink, onClick}) => {
  const Component = page === '...' ? 'span' : 'a'
  const href = page === '...' ? null : pageLink === ''
    ? '#' : pageLink
  const handleClick = !onClick ? null : (e) => {
    e.preventDefault()
    onClick(page)
  }
  return (
    <Component href={href} onClick={handleClick} className={style.pagination_link} >
      {page}
    </Component>
  )
}

export default Page
