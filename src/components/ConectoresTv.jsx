import style from './ConectoresTv.module.css'

// imagem
import conectoresDaTv from '../assets/images/tv-com-conectores.svg'

const ConectoresTv = () => {
    return (
        <div className={style.conectoresTv}>
            <section>
                <article>
                    <p>
                        <span>Nunca mais fique sem espaço</span> para conectar os videogames, notebooks, pen drives e outros dispositivos direto na <span>sua TV</span>.
                    </p>
                    <img width="1100px" className='imgResponsive' src={conectoresDaTv} alt="" />
                </article>
            </section>
        </div>
    )
}

export default ConectoresTv