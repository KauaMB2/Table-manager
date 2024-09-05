    import { createContext, useState } from "react"

    interface ColorProps{//Cria uma interface que representa as props do Colors
        primaryColor: string
        secondaryColor: string
        textColor:string
        setPrimaryColor:(value:string)=>void
        setSecondaryColor:(value:string)=>void
        setTextColor:(value:string)=>void
        resetColors:()=>void
    }

    const ColorsContext=createContext<ColorProps>({} as ColorProps)//Cria contexto para Colors

    const ColorsProvider=({ children }: { children: React.ReactNode })=>{//Cria o Provider do contexto
        const [primaryColor, setPrimaryColor]=useState<string>("#ffffff")
        const [secondaryColor, setSecondaryColor]=useState<string>("#dcdcdc")
        const [textColor, setTextColor]=useState<string>("#3c3c3c")

        const resetColors=()=>{
            setPrimaryColor("#ffffff")
            setSecondaryColor("#dcdcdc")
            setTextColor("#3c3c3c")
        }

        return(// Retornar componente para renderizar os componentes filhos
            <ColorsContext.Provider value={{ primaryColor, secondaryColor, textColor, setPrimaryColor, setSecondaryColor, setTextColor, resetColors }}>
                <>{children}</> 
            </ColorsContext.Provider>
        )
    }

    export { ColorsProvider, ColorsContext }