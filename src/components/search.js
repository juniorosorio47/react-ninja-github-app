'use strict'

import React from 'react'

const Search = ({handleSearch, isDisabled}) => (
    <div className='search'>
        <input 
            disabled={isDisabled}
            type='search' 
            placeholder='Digite o usuário:' 
            onKeyUp={handleSearch}
            />
    </div>
)

Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired
}

export default Search