import styles from './GameInfo.module.css'

import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo ({ currentPlayer, winner, onReset }) {

 const shouldDisableButton = () => {
   if (winner !== 0) return true
 }

  return (
    <div className={styles.gameInfo}>
       {
         winner === 0 && 
           <>
             <h4>Próximo a Jogar:</h4>
             {
             currentPlayer === 1 && <Icon iconName= "Circle" />
             }
             {
               currentPlayer === -1 && <Icon iconName= "x" />
            }
        
           </>
       }
       {
         winner !== 0 &&
         <>
             <h4>Fim de Jogo! Campeão:</h4>
             {
               winner === -1 && <Icon iconName= "x" />
             }
             {
               winner ===  1 && <Icon iconName= "circle" />
             }

         </>
       }
       <Button
         onClick={onReset}
         disabled={!shouldDisableButton()}
       >
         Reiniciar
       </Button>
    </div>
  )
}

export default GameInfo