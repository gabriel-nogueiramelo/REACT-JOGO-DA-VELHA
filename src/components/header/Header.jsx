import styles from './Header.module.css'

import Title from "../title/Title"
import Subtitle from "../subtitle/SubTitle"


function Header () {
return (
  <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por Gabriel Nogueira</Subtitle>
  </div>
)
}

export default Header