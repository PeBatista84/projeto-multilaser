import style from './Beneficios.module.css'

//imagens
import freteGratis from '../assets/images/beneficios/frete-gratis.svg'
import assistenciaTecnica from '../assets/images/beneficios/assistencia-tecnica.svg'
import garantia from '../assets/images/beneficios/garantia.svg'
import devolucao from '../assets/images/beneficios/devolucao.svg'

const Beneficios = () => {
    return (
        <div className={style.beneficios}>
            <section>
                <article>
                    <div>
                        <img width="90px" src={freteGratis} alt="" />
                        <p>
                            Frete grátis
                        </p>
                    </div>
                    <div>
                        <img width="90px" src={assistenciaTecnica} alt="" />
                        <p>
                            Assistência técnica
                        </p>
                    </div>
                    <div>
                        <img width="90px" src={garantia} alt="" />
                        <p>
                            1 ano de garantia
                        </p>
                    </div>
                    <div>
                        <img width="90px" src={devolucao} alt="" />
                        <p>
                            10 dias para devolução gratuita
                        </p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Beneficios