import style from './Details.module.css';

// importando array detalhes
import details from '../../../data/Details.json';

// console.log(details.details)

const Details = () => {
  return (
    <div className={style.details}>
        <section>
            <article>
                    {details && details.details.map(e => (
                        <div key={e.id}>
                            <img width="120px" src={e.img} alt={e.title} />
                            <p>{e.title}</p>
                        </div>
                    ))}
            </article>
        </section>
    </div>
  )
}

export default Details