import style from './Home.module.css'
import Banner from '../components/Banner'
import DarkSection from '../components/DarkSection'
import ComandoVoz from '../components/ComandoVoz'
import MeioFilme from '../components/MeioFilme'
import ConectoresTv from '../components/ConectoresTv'
import Avaliacoes from '../components/Avaliacoes'
import Beneficios from '../components/Beneficios'

const Home = () => {
  return (
    <div className={style}>
        <Banner />
        <DarkSection />
        <ComandoVoz />
        <MeioFilme />
        <ConectoresTv />
        <Avaliacoes />
        <Beneficios />
    </div>
  )
}

export default Home