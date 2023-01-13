import { useState, useEffect } from "react"


export const PageFour = () => {


    const [hide, setHide] = useState(true)
    const [source, setSource] = useState(false)

    const [uTube, setUTube] = useState(false)
    const [hard, setHard] = useState(false)
    const [bnb, setBnB] = useState(false)

    const sources = {
        "uTube": "https://utube-bbn0.onrender.com/",
        "Hard": "https://hard.onrender.com/",
        "BnB": "https://bnb-cdd6.onrender.com/"
    }

    const handleUTubeClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (!uTube && !hard && !bnb && hide) {
            setSource(sources.uTube)
            setUTube(true)
            setHide(false)
            return
        }
        if (hard || bnb) {
            setSource(sources.uTube)
            setUTube(true)
            setHard(false)
            setBnB(false)
            return
        }
        if (uTube && !hide) {
            setHide(true)
            setUTube(false)
            return
        }
        if (uTube && hide) {
            setHide(false)
            return
        }
    }

    const handleHardClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (!uTube && !hard && !bnb && hide) {
            setSource(sources.Hard)
            setHard(true)
            setHide(false)
            return
        }
        if (hard && !hide) {
            setHide(true)
            setHard(false)
            return
        }
        if (uTube || bnb) {
            setSource(sources.Hard)
            setHard(true)
            setUTube(false)
            setBnB(false)
            return
        }
        if (hard && hide) {
            setHide(false)
            return
        }

    }

    const handleBnBClick = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (!uTube && !hard && !bnb && hide) {
            setSource(sources.BnB)
            setBnB(true)
            setHide(false)
            return
        }
        if (hard || uTube) {
            setBnB(true)
            setHard(false)
            setUTube(false)
            setSource(sources.BnB)
            return
        }
        if (bnb && !hide) {
            setHide(true)
            setBnB(false)
            return
        }
        if (bnb && hide) {
            setHide(false)
            return
        }
    }

    const handleExitClick = (e) => {
        e.preventDefault()
        setHide(true)
    }

    return (
        <div className="Page Four" onClick={handleExitClick}>
            <div className="left">
                <div className="left-stuff">
                    <div id="left-title">
                        Projects
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="right-stuff">
                    <div onClick={handleUTubeClick} className="right-stuff-items">
                        <span id="title">uTube</span>
                        <div>YouTube clone</div>
                        <div><a href="https://utube-bbn0.onrender.com/" target="_blank" rel="noreferrer">Project link</a>&nbsp;&nbsp;<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Original Site</a></div>
                    </div>
                    <div onClick={handleHardClick} className="right-stuff-items">
                        <span id="title">Hard</span>
                        <div>Medium clone</div>
                        <div><a href="https://hard.onrender.com/" target="_blank" rel="noreferrer">Project link</a>&nbsp;&nbsp;<a href="https://medium.com/" target="_blank" rel="noreferrer">Original Site</a></div>
                    </div>
                    <div onClick={handleBnBClick} className="right-stuff-items">
                        <span id="title">BnB</span>
                        <div>AirBnB clone</div>
                        <div><a href="https://bnb-cdd6.onrender.com" target="_blank" rel="noreferrer">Project link</a>&nbsp;&nbsp;<a href="https://www.airbnb.com/" target="_blank" rel="noreferrer">Original Site</a></div>
                    </div>
                </div>
                <div className={`preview-container ${hide ? "hide" : "show"}`}>
                    <iframe
                        title="preview"
                        src={source}>
                    </iframe>
                </div>
            </div>
        </div>
    )

}

export default PageFour
