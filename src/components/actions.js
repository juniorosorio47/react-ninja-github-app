'use strict'

import React from 'react'

const Actions = ({getRepos}) => (
    <div className='actions'>
        <button onClick={getRepos}>Ver respositórios</button>
        <button>Ver favoritos</button>
    </div>
)

export default Actions