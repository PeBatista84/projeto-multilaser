import style from './SmartTv.module.css';

//imagens
import smartTv from "../../assets/images/smart-tv.svg"

const SmartTv = () => {
  return (
    <div className={style.smartTv}>
        <section>
            <article>
                <div>
                    <p>
                        Aproveite uma experiência cinematográfica completa dentro de casa com a <span>Smart TV 55” DLED 4K</span>. Imagens mais nítidas e cores vibrantes na tela DLED 4K além de toda a praticidade com bluetooth e Android TV
                    </p>
                </div>
                <img src={smartTv} alt="Smart TV 55 Polegadas DLED 4K" />
            </article>
            <div className={style.quadroFundo}></div>
        </section>
    </div>
  )
}

export default SmartTv