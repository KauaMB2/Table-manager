import { createContext, useState } from "react"

interface SidePanelProps{//Cria uma interface que representa as props do SidePanel
    isTitleShown: boolean
    isColumnShown: boolean
    isColorShown: boolean
    toggleIsTitleShown:()=>void
    toggleIsColumnShown:()=>void
    toggleIsColorShown:()=>void
}

const SidePanelContext=createContext<SidePanelProps>({} as SidePanelProps)//Cria contexto para SidePanel

const SidePanelProvider=({ children }: { children: React.ReactNode })=>{//Cria o Provider do contexto
    const [isTitleShown, setIsTitleShown]=useState<boolean>(false)
    const [isColumnShown, setIsColumnShown]=useState<boolean>(false)
    const [isColorShown, setIsColorShown]=useState<boolean>(false)
    const toggleIsTitleShown=()=>{
        setIsTitleShown(!isTitleShown)
    }
    const toggleIsColumnShown=()=>{
        setIsColumnShown(!isColumnShown)
    }
    const toggleIsColorShown=()=>{
        setIsColorShown(!isColorShown)
    }
    return(// Rertorna componente para renderizar os componentes filhos
        <SidePanelContext.Provider value={{ isTitleShown, isColumnShown, isColorShown, toggleIsTitleShown, toggleIsColumnShown, toggleIsColorShown }}>
            <>{children}</> 
        </SidePanelContext.Provider>
    )
}

export { SidePanelProvider, SidePanelContext }