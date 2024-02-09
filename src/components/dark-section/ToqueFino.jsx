import style from './ToqueFino.module.css'

// imagem
import toqueFino from '../../assets/images/toque-fino.svg'

const ToqueFino = () => {
    return (
        <div className={style.toqueFino}>
            <section>
                <article>
                    <img width="881px" src={toqueFino} alt="" />
                    <div>
                        <h2>
                            Sua sala com um toque mais fino
                        </h2>
                        <p>
                            <span>As bordas finas da Smart TV 55” DLED 4K</span> passam despercebidas pelos olhos, mas agregam valor à sua decoração e dão um toque de elegância para o ambiente.
                        </p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default ToqueFino