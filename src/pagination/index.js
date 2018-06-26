'use strict'

const rulePage = ({total, activePage}) => (
  activePage === 1
    ? 1
    : total === activePage
      ? activePage - 2
      : activePage - 1
)

const pagination = ({ total, activePage }) => {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const visiblePages = 3

  let pages = [
    1,
    ...Array.from({ length: visiblePages }, (_, i) => i + rulePage({ total, activePage })),
    total
  ]

  pages = pages.filter((page, index, array) => array.indexOf(page) === index)

  return pages
}

export default pagination
