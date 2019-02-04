'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            userinfo:null,
            repos: [{}],
            starred: [{}]
        }
    }

    handleSearch(e){
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13
        if(keyCode === ENTER){
            ajax().get(`https://api.github.com/users/${value}`)
            .then((result)=>{

                this.setState({
                    userinfo:{ 
                        username: result.name,
                        photo: result.avatar_url,
                        repos: result.public_repos,
                        login: result.login,
                        followers:result.followers,
                        following: result.following,
                    }
                })
            })
        }
    }

    getRepos(e){
        ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/repos`)
        .then((result)=>{
            result.map((repo)=>{
                this.setState({
                    repos: this.state.repos.push({name: repo.name, link: repo.html_url})
                })
            })
        })
    }

    render(){
        return <AppContent
            userinfo={this.state.userinfo}
            repos={this.state.repos}
            starred={this.state.starred}
            handleSearch={(e) => this.handleSearch(e)}
            getRepos={(e)=>this.getRepos(e)}
        />
    }

}

export default App