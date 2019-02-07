import React from 'react'

const Mensagem = ({tipoMsg, msg}) => (
    <div className={tipoMsg}>
        <p>{msg}</p>
    </div>
)

export default Mensagem