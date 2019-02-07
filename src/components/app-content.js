'use strict'

import React from 'react'
import Header from './header'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import Mensagem from './mensagem'
import '../css/style.css'

const AppContent = ({userinfo, repos, starred, isFetching, isFetchingRepo, errorMsg, handleSearch, getRepos, getStarred}) => (
    <div className='app'>
        <Header/>
        <Search isDisabled={isFetching} handleSearch={handleSearch}/>
        {isFetching && <Mensagem tipoMsg={'alert alert-info mensagem'} msg={'Carregando usuário...'}/>}
        {errorMsg && <Mensagem tipoMsg={'alert alert-danger mensagem'} msg={'Usuário não encontrado'}/>}
        {!!userinfo && <UserInfo userinfo={userinfo}/>}
        {!!userinfo && <Actions getRepos = {getRepos} getStarred={getStarred}/>}
        {isFetchingRepo && <Mensagem tipoMsg={'alert alert-info mensagem'} msg={'Carregando repositórios...'}/>}
            {!!repos.length && <Repos 
                className='repos' 
                title='Repositórios'
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