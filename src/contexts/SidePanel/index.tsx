import { createContext, useState } from "react"

interface SidePanelProps{//Cria uma interface que representa as props do SidePanel
    isTitleShown: boolean
    isColumnShown: boolean
    toggleIsTitleShown:()=>void
    toggleIsColumnShown:()=>void
}

const SidePanelContext=createContext<SidePanelProps>({} as SidePanelProps)//Cria contexto para SidePanel

const SidePanelProvider=({ children }: { children: React.ReactNode })=>{//Cria o Provider do contexto
    const [isTitleShown, setIsTitleShown]=useState<boolean>(false)
    const [isColumnShown, setIsColumnShown]=useState<boolean>(false)
    const toggleIsTitleShown=()=>{
        setIsTitleShown(!isTitleShown)
    }
    const toggleIsColumnShown=()=>{
        setIsColumnShown(!isColumnShown)
    }

    return(// Rertorna componente para renderizar os componentes filhos
        <SidePanelContext.Provider value={{ isTitleShown, isColumnShown, toggleIsTitleShown, toggleIsColumnShown }}>
            <>{children}</> 
        </SidePanelContext.Provider>
    )
}

export { SidePanelProvider, SidePanelContext }