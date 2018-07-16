
'use strict'
import React from 'react'
import { hot } from 'react-hot-loader'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

const initialReposBase = {
  repos: [],
  pagination: {}
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: initialReposBase,
      starred: initialReposBase,
      isFetching: false
    }

    this.per_page = 3
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (username, type, page = 1) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}?page=${page}&per_page=${this.per_page}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      ajax()
        .get(this.getGitHubApiUrl(value))
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: initialReposBase,
            starred: initialReposBase
          })
        })
        .always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type, page) {
    return e => {
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type, page)).then(result => {
        this.setState({
          [type]: {
            repos: result.map(repo => ({
              name: repo.name,
              link: repo.html_url
            })),
            pagination: {
              total: (Math.ceil(parseInt(this.state.userinfo[type]) / 3)),
              activePage: page
            }
          }
        })
      })
    }
  }

  render () {
    return (
      <AppContent
        {...this.state}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
        handlePagination={(type, page) => this.getRepos(type, page)()}
      />
    )
  }
}

export default hot(module)(App)
