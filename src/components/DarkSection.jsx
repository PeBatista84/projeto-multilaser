import Details from "./dark-section/Details"
import SemPerderAssunto from "./dark-section/SemPerderAssunto"
import SmartTv from "./dark-section/SmartTv"
import Telona from "./dark-section/Telona"
import ToqueFino from "./dark-section/ToqueFino"
import style from "./DarkSection.module.css"

const DarkSection = () => {
  return (
    <div className={style.darkSection}>
        <Details />
        <SmartTv />
        <SemPerderAssunto />
        <Telona />
        <ToqueFino />
    </div>
  )
}

export default DarkSection