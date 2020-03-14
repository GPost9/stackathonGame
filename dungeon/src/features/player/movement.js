import store from '../../config/store'
import { SIZE } from '../../config/constants'
export default function handleMovement (player) {
    
    function handleKeyDown(e) {
        
        e.preventDefault()
        
        function getNewPosition(direction) {
            const oldPos = store.getState().player.position
            switch (direction) {
                case 'WEST': 
                  return [ oldPos[0] - SIZE, oldPos[1]]
                case 'EAST': 
                  return [ oldPos[0] + SIZE, oldPos[1]]
                case 'NORTH': 
                  return [ oldPos[0] , oldPos[1] - SIZE]
                case 'SOUTH': 
                  return [ oldPos[0], oldPos[1] + SIZE]
            }
        }


        function moveDirection (direction) {
            store.dispatch({
                type: 'MOVE_PLAYER',
                payload: {
                    position: getNewPosition(direction)
                }
            })
        }


        switch (e.keyCode) {
            case 37: 
               return moveDirection('WEST')
            case 38: 
               return moveDirection('NORTH')
            case 39:
               return moveDirection('EAST')
            case 40:
               return moveDirection('SOUTH')
            default:
                console.log(e.keyCode)
        }
    }
    
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })
    return player
}