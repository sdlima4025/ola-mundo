import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/fotoPerfil.png'
export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
          <h1 className={styles.titulo}>
            Olá Mundo!
          </h1>

          <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Sérgio Lima, 
          aluno Front-end da Alura. 
          Aqui compartilho vários conhecimentos, espero que aprendamos algo novo juntos :)
          </p>
        </div>

        <div className={styles.imagens}>
          <img 
              className={styles.circuloColorido}
              src={circuloColorido} 
              aria-hidden={true}
              alt='Circulo colorido'
          />

          <img 
            className={styles.minhaFoto}
            src={minhaFoto}
            alt='Foto do Sérgio Lima Sorrindo'
          />
        </div>
    </div>
  )
}