'use strict'

import { expect } from 'chai'
import pagination from './index'

test('pagination should be a function', () => {
  expect(pagination).to.be.a('function')
})

test('pagination({ total:1, activePage:1 }) should return [1]', () => {
  const params = { total: 1, activePage: 1 }
  const result = [1]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:2, activePage:1 }) should return [1, 2]', () => {
  const params = { total: 2, activePage: 1 }
  const result = [1, 2]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:5, activePage:1 }) should return [1, 2, 3, 4, 5]', () => {
  const params = { total: 5, activePage: 1 }
  const result = [1, 2, 3, 4, 5]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:6, activePage:1 }) should return [1, 2, 3, "...", 6]', () => {
  const params = { total: 6, activePage: 1 }
  const result = [1, 2, 3, '...', 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:6, activePage:2 }) should return [1, 2, 3, "...", 6]', () => {
  const params = { total: 6, activePage: 2 }
  const result = [1, 2, 3, '...', 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:6, activePage:3 }) should return [1, 2, 3, 4, 5, 6]', () => {
  const params = { total: 6, activePage: 3 }
  const result = [1, 2, 3, 4, 5, 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:6, activePage:4 }) should return [1, 2, 3, 4, 5, 6]', () => {
  const params = { total: 6, activePage: 4 }
  const result = [1, 2, 3, 4, 5, 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:6, activePage:5 }) should return [1, "...", 4, 5, 6]', () => {
  const params = { total: 6, activePage: 5 }
  const result = [1, '...', 4, 5, 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:6, activePage:6 }) should return [1, "...", 4, 5, 6]', () => {
  const params = { total: 6, activePage: 6 }
  const result = [1, '...', 4, 5, 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:7, activePage:1 }) should return [1, 2, 3, "...", 7]', () => {
  const params = { total: 7, activePage: 1 }
  const result = [1, 2, 3, '...', 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:7, activePage:2 }) should return [1, 2, 3, "...", 7]', () => {
  const params = { total: 7, activePage: 2 }
  const result = [1, 2, 3, '...', 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:7, activePage:3 }) should return [1, 2, 3, 4, "...", 7]', () => {
  const params = { total: 7, activePage: 3 }
  const result = [1, 2, 3, 4, '...', 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:7, activePage:4 }) should return [1, 2, 3, 4, 5, 6, 7]', () => {
  const params = { total: 7, activePage: 4 }
  const result = [1, 2, 3, 4, 5, 6, 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:7, activePage:5 }) should return [1, "...", 4, 5, 6, 7]', () => {
  const params = { total: 7, activePage: 5 }
  const result = [1, '...', 4, 5, 6, 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:7, activePage:6 }) should return [1, "...", 5, 6, 7]', () => {
  const params = { total: 7, activePage: 6 }
  const result = [1, '...', 5, 6, 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:7, activePage:7 }) should return [1, "...", 5, 6, 7]', () => {
  const params = { total: 7, activePage: 7 }
  const result = [1, '...', 5, 6, 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:8, activePage:1 }) should return [1, 2, 3, "...", 8]', () => {
  const params = { total: 8, activePage: 1 }
  const result = [1, 2, 3, '...', 8]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:8, activePage:2 }) should return [1, 2, 3, "...", 8]', () => {
  const params = { total: 8, activePage: 2 }
  const result = [1, 2, 3, '...', 8]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:8, activePage:3 }) should return [1, 2, 3, 4, "...", 8]', () => {
  const params = { total: 8, activePage: 3 }
  const result = [1, 2, 3, 4, '...', 8]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:8, activePage:4 }) should return [1, 2, 3, 4, 5, "...", 8]', () => {
  const params = { total: 8, activePage: 4 }
  const result = [1, 2, 3, 4, 5, '...', 8]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:8, activePage:5 }) should return [1, "...", 4, 5, 6, 7, 8]', () => {
  const params = { total: 8, activePage: 5 }
  const result = [1, '...', 4, 5, 6, 7, 8]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:8, activePage:6 }) should return [1, "...", 5, 6, 7, 8]', () => {
  const params = { total: 8, activePage: 6 }
  const result = [1, '...', 5, 6, 7, 8]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:8, activePage:7 }) should return [1, "...", 6, 7, 8]', () => {
  const params = { total: 8, activePage: 7 }
  const result = [1, '...', 6, 7, 8]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:8, activePage:8 }) should return [1, "...", 6, 7, 8]', () => {
  const params = { total: 8, activePage: 8 }
  const result = [1, '...', 6, 7, 8]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:9, activePage:1 }) should return [1, 2, 3, "...", 9]', () => {
  const params = { total: 9, activePage: 1 }
  const result = [1, 2, 3, '...', 9]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:9, activePage:2 }) should return [1, 2, 3, "...", 9]', () => {
  const params = { total: 9, activePage: 2 }
  const result = [1, 2, 3, '...', 9]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:9, activePage:3 }) should return [1, 2, 3, 4, "...", 9]', () => {
  const params = { total: 9, activePage: 3 }
  const result = [1, 2, 3, 4, '...', 9]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:9, activePage:4 }) should return [1, 2, 3, 4, 5, "...", 9]', () => {
  const params = { total: 9, activePage: 4 }
  const result = [1, 2, 3, 4, 5, '...', 9]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:9, activePage:5 }) should return [1, "...", 4, 5, 6, "...", 9]', () => {
  const params = { total: 9, activePage: 5 }
  const result = [1, '...', 4, 5, 6, '...', 9]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:9, activePage:6 }) should return [1, "...", 5, 6, 7, 8, 9]', () => {
  const params = { total: 9, activePage: 6 }
  const result = [1, '...', 5, 6, 7, 8, 9]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:9, activePage:7 }) should return [1, "...", 6, 7, 8, 9]', () => {
  const params = { total: 9, activePage: 7 }
  const result = [1, '...', 6, 7, 8, 9]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:9, activePage:8 }) should return [1, "...", 7, 8, 9]', () => {
  const params = { total: 9, activePage: 8 }
  const result = [1, '...', 7, 8, 9]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:9, activePage:9 }) should return [1, "...", 7, 8, 9]', () => {
  const params = { total: 9, activePage: 9 }
  const result = [1, '...', 7, 8, 9]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:250, activePage:1 }) should return [1, 2, 3, "...", 250]', () => {
  const params = { total: 250, activePage: 1 }
  const result = [1, 2, 3, '...', 250]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total:250, activePage:100 }) should return [1, "...", 99, 100, 101, "...", 250]', () => {
  const params = { total: 250, activePage: 100 }
  const result = [1, '...', 99, 100, 101, '...', 250]
  expect(pagination(params)).to.be.deep.equal(result)
})
