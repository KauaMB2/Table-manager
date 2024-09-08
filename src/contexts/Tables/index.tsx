import { createContext, useCallback, useRef, useState } from "react"

interface TablesProps{//Cria uma interface que representa as props do Tables
    currentTable: Table
    currentId:number
    tablePreview:boolean
    addColumn:()=>void
    handleTableNameChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
    removeColumn:()=>void
    setCurrentId:(value:number)=>void
    handlePreviewClick:()=>void
    handleCellClick:(event:React.MouseEvent<HTMLDivElement>)=>void
    swapCells:(event:React.MouseEvent<HTMLDivElement>)=>void
    handleCellModify:(event: React.ChangeEvent<HTMLInputElement>)=>void
}

interface Table{
    tableName:string
    content: Array<[number, string, string]>
}

const TablesContext=createContext<TablesProps>({} as TablesProps)//Cria contexto para Tables

const TablesProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentTable, setCurrentTable] = useState<Table>(
        {
            tableName: "My Table",
            content: [
                [0, "Column 0", "To select or unselect a cell, you just need to click in the wished cell and use the side panel to modify the content."]
            ]
        }
    )
    const [currentId, setCurrentId] = useState<number>(-1)
    const [tablePreview, setTablePreview] = useState<boolean>(false)
    const amountOfTable = useRef<number>(0)
    const addColumn = useCallback((): void => {
        amountOfTable.current++
        setCurrentTable((prevTable) => ({
          ...prevTable,
          content: [...prevTable.content, [amountOfTable.current, `Column ${amountOfTable.current}`, ""]]
        }))
    }, [])
    const handlePreviewClick = useCallback((): void => {
        setTablePreview((prev) => !prev)
        setCurrentId(-1)
      }, [])
      const swapCells = useCallback((event: React.MouseEvent<HTMLDivElement>): void => {
        event.stopPropagation()
        const target = event.currentTarget as HTMLDivElement
        const id = parseInt(target.id)
        const className = target.className
    
        if (className === "arrowLeftDiv" && id > 0) {
          setCurrentTable((prevTable) => {
            const newContent: Array<[number, string, string]> = [...prevTable.content]
            const temp = newContent[id]
            newContent[id] = newContent[id - 1]
            newContent[id - 1] = temp
            return { ...prevTable, content: newContent }
          });
        } else if (className === "arrowRightDiv" && id < currentTable.content.length - 1) {
          setCurrentTable((prevTable) => {
            const newContent: Array<[number, string, string]> = [...prevTable.content]
            const temp = newContent[id]
            newContent[id] = newContent[id + 1]
            newContent[id + 1] = temp
            return { ...prevTable, content: newContent }
          })
        }
        setCurrentId(-1)
      }, [currentTable.content.length])

    const handleCellModify = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target: HTMLInputElement = event.currentTarget;
        const id = target.id;
        
        setCurrentTable((prevTable) => {
            const newContent = [...prevTable.content] as Array<[number, string, string]>
            switch (id) {
                case "columnName":
                    if(target.value.length>16){
                        return prevTable
                    }
                    if (currentId !== -1) {
                        newContent[currentId] = [newContent[currentId][0], target.value, newContent[currentId][2]]
                    }
                    break
                case "content":
                    if(target.value.length>160){
                        return prevTable
                    }
                    if (currentId !== -1) {
                        newContent[currentId] = [newContent[currentId][0], newContent[currentId][1], target.value]
                    }
                    break
                default:
                    break
            }
            
            return {
                ...prevTable,
                content: newContent
            }
        })
    }    

    const handleCellClick = useCallback((event: React.MouseEvent<HTMLDivElement>): void => {
        const target = event.currentTarget as HTMLDivElement
        const id = parseInt(target.id)
        setCurrentId((prevId) => (id !== prevId ? id : -1))
    }, [])

    const removeColumn = useCallback((): void => {
        setCurrentTable((prevTable) => ({
          ...prevTable,
          content: prevTable.content.filter((_, index) => index !== currentId)
        }))
        setCurrentId(-1)
      }, [currentId])
    
      const handleTableNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
        setCurrentTable((prevTable) => {
          if (event.target.value.length > 25) return prevTable
          return { ...prevTable, tableName: event.target.value }
        })
      }, [])

    return(// Retornar componente para renderizar os componentes filhos
        <TablesContext.Provider value={{ currentTable, currentId, tablePreview, addColumn, handleTableNameChange, removeColumn, setCurrentId, handleCellClick, swapCells, handleCellModify, handlePreviewClick }}>
            {children}
        </TablesContext.Provider>
    )
}

export { TablesProvider, TablesContext }