import style from './Telona.module.css'

// imagens
import telona from '../../assets/images/telona.svg'
import painel from '../../assets/images/painel.svg'
import tv4k from '../../assets/images/1.svg'

const Telona = () => {
  return (
    <div className={style.telona}>
        <section>
            <article>
                <div>
                    <h2>
                        Uma verdadeira telona
                    </h2>
                    <p>
                        Falando em qualidade de imagem, a Smart TV 55” DLED 4K realmente se confunde com uma tela de cinema.
                    </p>
                </div>
                <img className='imgResponsive' src={telona} alt="" />
                <div>
                    <div>
                        <img width="120px" src={tv4k} alt="" />
                        <h3>
                            Resolução 4K
                        </h3>
                        <p>
                            Imagens muito mais nítidas e imersivas.
                        </p>
                    </div>
                    <div>
                        <img width="120px" src={painel} alt="" />
                        <h3>
                            Painel de Iluminação DLED
                        </h3>
                        <p>
                            Cores vibrantes e com mais contraste.
                        </p>
                    </div>
                </div>
            </article>
        </section> 
    </div>
  )
}

export default Telona