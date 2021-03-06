'use strict'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import React from 'react'
import Actions from './index'

const stories = storiesOf('Actions', module)

stories.add('Actions component', () => (
  <Actions getRepos={action('Get Repos')} getStarred={action('Get Starred')} />
))
