import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalContextProvider({children}) {
    const [destinationData, setDestinationData ] = useState('moon')
    const nav = (item) => {
        setDestinationData(item)
    }
    return <GlobalContext.Provider value={{destinationData, nav }}>{children}</GlobalContext.Provider>
} 