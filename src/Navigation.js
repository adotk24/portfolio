import doubleDown from './Icons/double-down.svg'
import down from './Icons/down-arrow.svg'
import doubleUp from './Icons/double-up.svg'
import up from './Icons/up-arrow.svg'


export const Navigation = () => {

    const handleTopClick = (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    const handleUpClick = (e) => {
        window.scrollBy({
            top: -document.body.scrollHeight / 5,
            left: 0,
            behavior: 'smooth'
          });
    }

    const handleDownClick = (e) =>{
        window.scrollBy({
            top: document.body.scrollHeight / 5,
            left: 0,
            behavior: 'smooth'
          });
    }

    const handleBottomClick = (e) => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
    }

    return (
        <div className="Navigation">
            <img id="nav-icons" onClick={handleTopClick} src={doubleUp} alt=""/>
            <img id="nav-icons" onClick={handleUpClick} src={up} alt=""/>
            <img id="nav-icons" onClick={handleDownClick} src={down} alt=""/>
            <img id="nav-icons" onClick={handleBottomClick} src={doubleDown} alt=""/>
        </div>
    )
}

export default Navigation
