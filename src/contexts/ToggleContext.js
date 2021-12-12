import {createContext, useState, useEffect} from "react"

export const ToggleContext = createContext()
const ToggleContextProvider = (props) => {
    const [isMapOpen, setIsMapOpen] = useState(false)
    const [isShopOpen, setIsShopOpen] = useState(false)
    const [countDown, setCountDown] = useState({
        days: "",
        hours: "",
        minutes: "",
        seconds: ""
    })


    const openMap = () =>{
        setIsMapOpen(true)
    }

    const closeMap = () =>{
        setIsMapOpen(false)
    }
    const openShop = () =>{
        setIsShopOpen(true)
    }

    

    const Now = new Date().getTime()
    const Later = new Date("Sun Dec 12 2021 11:43:40 GMT+0100").getTime()
    const Difference = Later - Now

    const Days = Math.floor(Difference / (1000 * 60 * 60 * 24))
    const Hours = Math.floor((Difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const Minutes = Math.floor((Difference % (1000 * 60 * 60)) / (1000 * 60));
  const Seconds = Math.floor((Difference % (1000 * 60)) / 1000);

  useEffect(()=>{

     const timer = setInterval(()=>{
            setCountDown({
                days: Days,
                hours: Hours,
                minutes: Minutes,
                seconds: Seconds
            })
        }, 1000)

        return () => clearTimeout(timer);

  })


   
    return (
        <ToggleContext.Provider value={{isMapOpen, openMap, closeMap, isShopOpen, openShop, countDown, Difference}}>
                    {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider
