'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import Pagination from './index'

const stories = storiesOf(`<Pagination>`, module)

stories.add('without props', () => (
  <Pagination />
))

stories.add('with total and activaPage', () => (
  <Pagination total={10} activePage={5} />
))

stories.add('with page link', () => (
  <Pagination total={10} activePage={5} pageLink='http://www.valentina.com/page/{page}' />
))

stories.add('with callback', () => (
  <Pagination total={10} activePage={5} pageLink='http://www.valentina.com/page/{page}' onClick={(page) => {
    window.alert(page)
  }} />
))
