import style from './SemPerderAssunto.module.css';

// Imagens
import televisao from "../../assets/images/televisao.svg"
import televisaoMobile from "../../assets/images/televisao-mobile.svg"
import controle from "../../assets/images/controle.svg"

const SemPerderAssunto = () => {
    return (
        <div className={style.semPerderAssunto}>
            <section>
                <article>
                    <div>
                        <h2>
                            Sem perder nenhum assunto
                        </h2>
                        <p>
                            <span>A Smart TV 55” DLED 4K</span>  deixa você por dentro das séries e filmes do momento nos principais aplicativos de streaming, como Netflix, Globoplay, Disney+, HBO Max, Prime Video, Star+ <br />e muito mais!
                        </p>
                    </div>
                    {window.innerWidth >= 500 ? (
                        <img src={televisao} alt="" />
                    ) : (
                        <img className='imgResponsive' src={televisaoMobile} alt="" />
                    )}
                    
                    <div>
                        <img width="160px" src={controle} alt="" />
                        <p>
                            Com os <span>botões de acesso rápido</span> do controle remoto, a navegação entre as funções é muito mais rápida e fluida.
                        </p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default SemPerderAssunto