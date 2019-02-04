'use strict'

import React from 'react'

const UserInfo = ({userinfo}) => (
    <div className='user-info'>
        <img src={userinfo.photo}/>
        <h1>
            <a href={`https://api.github.com/users/${userinfo.login}`}>
                {userinfo.username}
            </a>
        </h1>
        <ul className='repos-info'>
            <li>Repositórios: {userinfo.repos}</li>
            <li>Seguidores: {userinfo.followers}</li>
            <li>Seguindo: {userinfo.following}</li>
        </ul>
    </div>
)

UserInfo.propTypes = {
    userinfo: React.PropTypes.shape({
        username: React.PropTypes.string,
        login: React.PropTypes.string.isRequired,
        repos: React.PropTypes.number.isRequired,
        followers: React.PropTypes.number.isRequired,
        following: React.PropTypes.number.isRequired,
        photo: React.PropTypes.string.isRequired,
    })
}

export default UserInfo





