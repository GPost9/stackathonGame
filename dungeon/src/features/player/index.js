import React from 'react'
import { connect } from 'react-redux'
import knight from './knight.png'
import handleMovement from './movement'


function Player (props)  {
    return (
        <div 
         style={{
             position: 'absolute',
             top: props.position[1],
             left: props.position[0],
             backgroundImage: `url('${knight}')`,
             backgroundPostion: '0, 0',
             width: '69px',
             height: '96px'
         }}
        />
            
    )
}

function mapStateToProps (state) {
    return {
        ...state.player,
        
    }
}



export default connect(mapStateToProps)(handleMovement(Player))