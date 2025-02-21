import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalContextProvider({children}) {
    const [destinationData, setDestinationData ] = useState('Moon');
    const [pagination, setPagination] = useState('Bob1');


    const HundleBubble =  (item) =>  {
        setPagination(item)
    }


    const nav = (item) => {
        setDestinationData(item)
    }
    return <GlobalContext.Provider value={{destinationData, nav,HundleBubble, pagination}}>{children}</GlobalContext.Provider>
} 