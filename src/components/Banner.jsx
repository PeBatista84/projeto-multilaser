import style from './Banner.module.css'

const Banner = () => {
  return (
    <div className={style.banner}>
      <section>
        <article>
          <h1>
            Smart TV 55" <span>DLED 4K</span> Multi <span>Série</span> Experience
          </h1>
          <p>
            O seu novo cinema particular.
          </p>
        </article>
      </section>
    </div>
  )
}

export default Banner