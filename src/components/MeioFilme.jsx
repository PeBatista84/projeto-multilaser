import style from './MeioFilme.module.css'

// imagem
import meioDoFilme from '../assets/images/meio-filme.svg'

const MeioFilme = () => {
    return (
        <div className={style.meioFilme}>
            <section>
                <article>
                    <div>
                        <h2>
                            No meio do filme, literalmente
                        </h2>
                        <p>
                        Com a tecnologia <span>Dolby Audio</span>, você vivencia o áudio potente e extremamente imersivo. Ouça desde o som de cada gota de chuva caindo no chão até o barulho estridente dos filmes de ação.
                        </p>
                    </div>
                    <div>
                        <img width="700px" className='imgResponsive' src={meioDoFilme} alt="" />
                    </div>
                </article>
            </section>
        </div>
    )
}

export default MeioFilme