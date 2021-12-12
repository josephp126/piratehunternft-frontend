import React, {useContext} from 'react'
import { ToggleContext } from '../contexts/ToggleContext'
import Map from "../imgs/roadmap.png"

const Roadmap = () => {
    const {isMapOpen, closeMap} = useContext(ToggleContext)

    const handleMapClose = ()=>{
        closeMap()
    }
    return (
        <div className={isMapOpen? "roadmap open" : "roadmap"} onClick={handleMapClose}>
            <div ><img src={Map} alt="roadmap"/></div>
            <div  onClick={handleMapClose}><i className="far fa-times-circle"></i></div>
        </div>
    )
}

export default Roadmap
