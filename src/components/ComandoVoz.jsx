import style from './ComandoVoz.module.css'

//imagens
import comandoVoz from '../assets/images/comando-de-voz.svg';
import controle from '../assets/images/controle.svg';
import chromecast from '../assets/images/chromecast.svg';

const ComandoVoz = () => {
  return (
    <div className={style.comandoVoz}>
        <section>
            <article>
                <div>
                    <h2>
                        Comando de voz
                    </h2>
                    <p>
                        Diretamente do controle remoto, o Google Assistente auxilia você. Navegue entre as funcionalidades da <span>Smart TV 55” DLED 4K</span> e controle outros dispositivos inteligentes da sua casa por meio da fala.
                    </p>
                    <img width="250px" src={comandoVoz} alt="" />
                    <img height="400px" src={controle} alt="" />
                </div>

                <div>
                    <h2>
                    Chromecast built-in
                    </h2>
                    <p>
                        Espelhe a tela do seu smartphone diretamente na <span>Smart TV 55” DLED 4K</span> para visualizar com facilidade todas as suas fotos, vídeos e outros conteúdos.
                    </p>
                    <img width="700px" src={chromecast} alt="" />
                </div>
            </article>
        </section>
    </div>
  )
}

export default ComandoVoz