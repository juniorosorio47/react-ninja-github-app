'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import '../css/style.css'

const AppContent = ({userinfo, repos, starred, handleSearch, getRepos}) => (
    <div className='app'>
        <Search handleSearch={handleSearch}/>
        {!!userinfo && <UserInfo userinfo={userinfo}/>}
        {!!userinfo && <Actions getRepos = {getRepos}/>}
            {!!repos.length && <Repos 
                className='repos' 
                title='Repositório'
                repos={repos}
            />}
            {!!starred.length && <Repos 
                className='starred' 
                title='Favoritos'
                repos={starred}
            />}
    </div>
)

AppContent.propTypes = {
    userinfo: React.PropTypes.object,
    repos: React.PropTypes.array.isRequired,
    starred: React.PropTypes.array.isRequired,
    handleSearch:React.PropTypes.func
}

export default AppContent