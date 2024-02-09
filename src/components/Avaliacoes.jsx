import style from './Avaliacoes.module.css';

// import * as React from 'react';

// importando array de pessoas
import people from '../../data/People.json';

import Glider from 'react-glider';
import 'glider-js/glider.min.css';

const Avaliacoes = () => {
    return (
        <div className={style.avaliacoes}>
            <section>
                <article>
                    <h2>
                        <span>Quem comprou</span> Multi <br /> Experience, aprovou!
                    </h2>
                    <div className={style.carousel}>
                        <Glider
                            rewind={false}
                            draggable
                            hasArrows={false}
                            hasDots
                            slidesToShow={1}
                            slidesToScroll={1}
                            responsive={[
                                {
                                    breakpoint: 500,
                                    settings: {
                                        slidesToShow: 3,
                                        hasArrows: false
                                    },
                                },
                            ]}
                        >
                            {people && people.people.map(person => (
                                <div key={person.id} className={style.quadroComentarios}>
                                    <div>
                                        <h3>
                                            {person.title}
                                        </h3>
                                        <p>
                                            {person.coment}
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <span>{person.name}</span> <br />
                                            {person.date}
                                        </p>
                                        <img width="120px" src={person.img} alt="" />
                                    </div>
                                </div>
                            ))}
                        </Glider>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Avaliacoes