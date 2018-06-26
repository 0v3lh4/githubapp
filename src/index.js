'use strict'

import React from 'react'
import { render } from 'react-dom'
import App from './app'

import './css/style.css'

render(<App />, document.querySelector('[data-js="app"]'))
