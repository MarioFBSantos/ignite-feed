import style from './Post.module.css';
export function Post(props){
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img 
                    className={style.avatar}
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQH2lc2zVCtOQA/profile-displayphoto-shrink_800_800/0/1626727319148?e=1666828800&v=beta&t=Tr_hAfM5i46EIlZJkteGR-FMtljEHHVx283ipulpqXs" 
                    />
                    <div className={style.authorInfo}>
                        <strong>Mario Santos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:30" dateTime="2022-05-11 08:30:00">Publicado há 1h</time>
            </header>

            <div className={style.content}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <p>
                    Saepe, mollitia aut repellat, reiciendis ducimus facilis dicta autem unde commodi exercitationem dignissimos, quaerat consequatur!
                </p>
                <p>
                    <a href="#">Lorem ipsum</a>
                </p>
                <p>
                    Atque neque quia, pariatur cum dolorem libero.
                </p>
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}