import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/perfil2.png"

export default function SobreMim () {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou Sérgio Lima!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Sérgio Sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou estudante Front-end na Alura e estou feliz de te
        ver por aqui. Minha história com programação começou na escola técnica do Senai, quando fiz um curso técnico em Manutenção e montagem de micro integrado ao curso de
        Informática. Eu aprendi o que era um hardware e como ele era controlado por um software, configurando-os através do sistema da época o MS-DOS, hoje conhecido como cmd.
        Em seguida me formei em Contabilidade e no estágio tive contato com um operador de tela preta, e sempre gostei muito do mundo tecnologico mas não tinha
        ideia de que trabalharia com isso hoje. No ensino superior, escolhi
        cursar Analise e Desenvolvimento de Software na Universidade Estácio de Sá (UNESA).
      </p>
      <p className={styles.paragrafo}>
        A minha experiência de dev mais próxima da realidade, está sendo como consultor funcional, testando e documentando a parte funcional standart de um sistema tributário, tenho aprendido muito enquanto
        verifico se a falha é de usabilidade do usuário ou BUG do sistema. 
        E foi enquanto eu estava no PET que decidi procurar um
        estágio em desenvolvimento web. Eu encontrei uma vaga na Alura para o
        Scuba Team e percebi que ela aliava duas paixões minhas: programação e
        educação. Para minha felicidade, fui escolhido para fazer parte do time. 
      </p>

      <p className={styles.paragrafo}>
      Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os
      colaboradores e colaboradoras. Hoje sou muito feliz de ter oportunidade
      de participar da turma 4 do projeto, Alura - ONE-- Oracle. Espero que
      possamos compartilhar conhecimento e fomentar o aprendizado para pessoas de baixa renda. Aprenda bastante!
      </p>

      

    </PostModelo>
  );
}