import {createContext, useState} from "react"

export const ToggleContext = createContext()
const ToggleContextProvider = (props) => {
    const [isMapOpen, setIsMapOpen] = useState(false)
    const [isShopOpen, setIsShopOpen] = useState(false)


    const openMap = () =>{
        setIsMapOpen(true)
    }

    const closeMap = () =>{
        setIsMapOpen(false)
    }
    const openShop = () =>{
        setIsShopOpen(true)
    }

   
    return (
        <ToggleContext.Provider value={{isMapOpen, openMap, closeMap, isShopOpen, openShop}}>
                    {props.children}
            </ToggleContext.Provider>
    )
}

export default ToggleContextProvider
