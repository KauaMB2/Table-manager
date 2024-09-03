import { createContext, useState } from "react"

interface ColorProps{//Cria uma interface que representa as props do Colors
    primaryColor: string
    secondaryColor: string
    setPrimaryColor:(value:string)=>void
    setSecondaryColor:(value:string)=>void
}

const ColorsContext=createContext<ColorProps>({} as ColorProps)//Cria contexto para Colors

const ColorsProvider=({ children }: { children: React.ReactNode })=>{//Cria o Provider do contexto
    const [primaryColor, setPrimaryColor]=useState<string>("#ffffff")
    const [secondaryColor, setSecondaryColor]=useState<string>("#dcdcdc")

    return(// Retornar componente para renderizar os componentes filhos
        <ColorsContext.Provider value={{ primaryColor, secondaryColor, setPrimaryColor, setSecondaryColor }}>
            <>{children}</> 
        </ColorsContext.Provider>
    )
}

export { ColorsProvider, ColorsContext }