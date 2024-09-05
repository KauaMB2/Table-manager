import { createContext, useRef, useState } from "react"

interface TablesProps{//Cria uma interface que representa as props do Tables
    currentTable: Table
    addColumn:()=>void
    changeTableName:(value:string)=>void
    removeColumn:()=>void
    setCurrentIndex:(value:number)=>void
}

interface Table{
    tableName:string
    content: Array<[string, string]>
}

const TablesContext=createContext<TablesProps>({} as TablesProps)//Cria contexto para Tables

const TablesProvider=({ children }: { children: React.ReactNode })=>{//Cria o Provider do contexto
    const [currentTable, setCurrentTable]=useState<Table>({tableName:"My Table", content: [["Column 1", "AA"]]})
    const [currentIndex, setCurrentIndex]=useState<number>(0)
    const amountOfTable=useRef(1)
    const addColumn = () => {
        amountOfTable.current++
        setCurrentTable((prevTable) => {
            return {
                ...prevTable,
                content: [...prevTable.content, [`Column ${amountOfTable.current}`, "AA"]]
            }
        })
        console.log(amountOfTable.current)
    }

    const removeColumn = () => {
        setCurrentTable((prevTable) => {
            return {
              ...prevTable,
              content: prevTable.content.filter((_, i) => i !== currentIndex)
            }
          })
    }

    const changeTableName = (newName:string) => {
        setCurrentTable((prevTable) => {
            return {
                ...prevTable, tableName:newName
            }
        })
    }

    return(// Retornar componente para renderizar os componentes filhos
        <TablesContext.Provider value={{ currentTable, addColumn, changeTableName, removeColumn, setCurrentIndex }}>
            <>{children}</> 
        </TablesContext.Provider>
    )
}

export { TablesProvider, TablesContext }