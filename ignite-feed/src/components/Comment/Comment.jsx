import styles from './Comment.module.css';
import {ThumbsUp, Trash} from 'phosphor-react'
export function Comment(){
    return(
        <div className={styles.comment}>
            <img 
                src="https://media-exp1.licdn.com/dms/image/C4D03AQH2lc2zVCtOQA/profile-displayphoto-shrink_800_800/0/1626727319148?e=1666828800&v=beta&t=Tr_hAfM5i46EIlZJkteGR-FMtljEHHVx283ipulpqXs"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mário Santos</strong>
                            <time title="11 de Maio às 08:30" dateTime="2022-05-11 08:30:00">Cerca de 1h atrás</time>
                        </div>
                        
                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>

                    </header>
                        <p>Muito bom! parabéns</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}