import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1534870439272-475575042b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            />
            
            <div className={styles.profile}>
                <img 
                src="https://media-exp1.licdn.com/dms/image/C4D03AQH2lc2zVCtOQA/profile-displayphoto-shrink_800_800/0/1626727319148?e=1666828800&v=beta&t=Tr_hAfM5i46EIlZJkteGR-FMtljEHHVx283ipulpqXs" 
                className={styles.avatar}
                />
                <strong>Mario Santos</strong>
                <span>Web developer</span>

                <footer>
                    
                    <a href="#"><PencilLine size={20}/> Editar seu perfil</a>
                </footer>
            </div>
        </aside>
    )
}