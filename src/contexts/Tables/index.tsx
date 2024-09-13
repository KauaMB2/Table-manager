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

const TablesContext:React.Context<TablesProps>=createContext<TablesProps>({} as TablesProps)//Cria contexto para Tables

const TablesProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentTable, setCurrentTable] = useState<Table>(
        {
            tableName: "My Table",
            content: [
                [0, "Column 0", "To select or unselect a cell, you just need to click in the wished cell."],
                [1, "Column 1", "To modify the table name, cell content or the column name, you must use the side panel if you are in computer or the bottom buttons if you are in a mobile."]
            ]
        }
    )
    const [currentId, setCurrentId] = useState<number>(-1)
    const [tablePreview, setTablePreview] = useState<boolean>(false)
    const amountOfTable = useRef<number>(1)
    const addColumn = useCallback((): void => {
        amountOfTable.current++
        setCurrentTable((prevTable) => ({
          ...prevTable,
          content: [...prevTable.content, [amountOfTable.current, `Column ${amountOfTable.current}`, ""]]
        }))
    }, [])
    const handlePreviewClick = useCallback((): void => {
        setTablePreview((prev) =>{
          return !prev
        })
        setCurrentId(-1)
      }, [])
    const swapCells = useCallback((event: React.MouseEvent<HTMLDivElement>): void => {
      event.stopPropagation()
      const target:HTMLDivElement = event.currentTarget as HTMLDivElement
      const id:number = parseInt(target.id)
      const className:string = target.className
  
      if (className === "arrowLeftDiv" && id > 0) {
        setCurrentTable((prevTable) => {
          const newContent: Array<[number, string, string]> = [...prevTable.content]
          const temp:[number, string, string] = newContent[id]
          newContent[id] = newContent[id - 1]
          newContent[id - 1] = temp
          return { ...prevTable, content: newContent }
        })
      } else if (className === "arrowRightDiv" && id < currentTable.content.length - 1) {
        setCurrentTable((prevTable) => {
          const newContent: Array<[number, string, string]> = [...prevTable.content]
          const temp:[number, string, string] = newContent[id]
          newContent[id] = newContent[id + 1]
          newContent[id + 1] = temp
          return { ...prevTable, content: newContent }
        })
      }
      setCurrentId(-1)
    }, [currentTable.content.length])
    const handleCellModify = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
      const target:HTMLInputElement = event.currentTarget as HTMLInputElement
      const id:string = target.id
      setCurrentTable((prevTable) => {
        const newContent:Array<[number, string, string]> = [...prevTable.content]
        if (currentId !== -1) {
          if (id === "columnName" && target.value.length <= 16) {
            newContent[currentId] = [newContent[currentId][0], target.value, newContent[currentId][2]]
          } else if (id === "content" && target.value.length <= 160) {
            newContent[currentId] = [newContent[currentId][0], newContent[currentId][1], target.value]
          }
        }
        return { ...prevTable, content: newContent }
      })
    }, [currentId])
    const handleCellClick = useCallback((event: React.MouseEvent<HTMLDivElement>): void => {
        const target:HTMLDivElement = event.currentTarget as HTMLDivElement
        const id:number = parseInt(target.id)
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