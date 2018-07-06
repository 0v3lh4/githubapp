'use strict'

const centerPage = ({ total, activePage }) =>
  (activePage === 1
    ? 1
    : total === activePage ? activePage - 2 : activePage - 1)

const isNumber = value => typeof value === 'number'

const pagination = ({ total = 1, activePage = 1 } = {}) => {
  if (!isNumber(total)) {
    throw new TypeError('total should be a number')
  }

  if (!isNumber(activePage)) {
    throw new TypeError('activePage should be a number')
  }

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const visiblePages = 3

  let pages = [
    1,
    ...Array.from(
      { length: visiblePages },
      (_, i) => i + centerPage({ total, activePage })
    ),
    total
  ]

  pages = pages.filter((page, index, array) => array.indexOf(page) === index)

  let firstPage = pages[0]
  let secondPage = pages[1]

  if (firstPage === secondPage - 2) {
    pages = [firstPage, secondPage - 1, ...pages.slice(secondPage - 2)]
  }

  firstPage = pages[0]
  secondPage = pages[1]

  if (firstPage < secondPage - 2) {
    pages = [firstPage, '...', ...pages.slice(firstPage)]
  }

  let penultimatePage = pages[pages.length - 2]
  let lastPage = pages[pages.length - 1]

  if (penultimatePage < lastPage - 2) {
    pages = [...pages.slice(0, -1), '...', lastPage]
  }

  penultimatePage = pages[pages.length - 2]
  lastPage = pages[pages.length - 1]

  if (penultimatePage === lastPage - 2) {
    pages = [...pages.slice(0, -1), lastPage - 1, lastPage]
  }

  return pages
}

export default pagination
