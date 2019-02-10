'use strict';

import React from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content';

class App extends React.Component{
    
    constructor(){
        super()
        this.state = {
            userinfo:null,
            repos: [],
            starred: [],
            isFetching: false,
            isFetchingRepo: false,
            errorMsg: false
        }
    }

    handleSearch(e){
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13   
        if(keyCode === ENTER){
            this.setState({
                isFetching: true, 
                userinfo:null,
                repos: [],
                starred:[]
            })
            ajax().get(`https://api.github.com/users/${value}`)
            .then((result)=>{
                this.setState({
                    repos:[],
                    starred:[],
                    userinfo:{ 
                        username: result.name,
                        photo: result.avatar_url,
                        repos: result.public_repos,
                        login: result.login,
                        followers:result.followers,
                        following: result.following,
                    }
                })
                this.setState({errorMsg: false})
            }).always(()=>{
                this.setState({isFetching: false})
            }).catch(()=>{
                this.setState({errorMsg: true})
            })
        }
    }

    getRepos(type){
        return (e) => {
            this.setState({isFetchingRepo: true})
            ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${type}`)
            .then((result)=>{
                this.setState({
                    [type]: result.map((repo)=>{
                        return {
                            name: repo.name,
                            link: repo.html_url
                        }
                    })
                })
            }).always(()=>{
                this.setState({isFetchingRepo: false})
            })
        }
    }

    render(){
        return <AppContent
            userinfo={this.state.userinfo}
            repos={this.state.repos}
            starred={this.state.starred}
            isFetching={this.state.isFetching}
            isFetchingRepo={this.state.isFetchingRepo}
            errorMsg={this.state.errorMsg}
            handleSearch={(e) => this.handleSearch(e)}
            getRepos={this.getRepos('repos')}
            getStarred={this.getRepos('starred')}
        />
    }

}

export default App