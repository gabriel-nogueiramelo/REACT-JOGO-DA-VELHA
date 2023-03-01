import styles from './Header.module.css'

import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Icon from '../icon/Icon'

function Header () {
  return (
    <div className={styles.header}>
       <Title>Jogo da Velha</Title>
       <Subtitle>Criado por Gabriel Nogueira</Subtitle>
        <div className={styles.iconContent}>
          <Icon iconName="github" Link="https://github.com/gabriel-nogueiramelo" />
        </div>
    </div>
 )
}

export default Header