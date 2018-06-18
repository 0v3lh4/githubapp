'use strict'

import { storiesOf } from '@storybook/react'
import React from 'react'
import Repos from './index'

storiesOf('Repos', module)
  .add('with title prop', () => <Repos title='Favoritos' />)
  .add('with repos', () => (
    <div style={{ padding: '50px' }}>
      <Repos
        title='Favoritos'
        repos={[
          {
            link: 'http://blog.da2k.com.br',
            name: 'Blog Da2k'
          }
        ]}
      />
    </div>
  ))
