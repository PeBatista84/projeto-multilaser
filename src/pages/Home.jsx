import style from './Home.module.css'
import Banner from '../components/Banner'
import DarkSection from '../components/DarkSection'
import ComandoVoz from '../components/ComandoVoz'

const Home = () => {
  return (
    <div className={style}>
        <Banner />
        <DarkSection />
        <ComandoVoz />
    </div>
  )
}

export default Home