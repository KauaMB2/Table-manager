import { createContext, useRef, useState } from "react"

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

const TablesProvider=({ children }: { children: React.ReactNode })=>{//Cria o Provider do contexto
    const [currentTable, setCurrentTable]=useState<Table>({tableName:"My Table", content: [[0, "Column 0", "To select and unselect a cell, you just need to click in the wished cell and use the side panel to modify the content."]]})
    const [currentId, setCurrentId]=useState<number>(-1)
    const [tablePreview, setTablePreview]=useState<boolean>(false)
    const amountOfTable=useRef<number>(0)
    const addColumn = ():void => {
        amountOfTable.current++
        setCurrentTable((prevTable) => {
            return {
                ...prevTable,
                content: [...prevTable.content, [amountOfTable.current, `Column ${amountOfTable.current}`, ""]]
            }
        })
    }
    const handlePreviewClick=()=>{
        setTablePreview(!tablePreview)
        setCurrentId(-1)
    }
    const swapCells=(event:React.MouseEvent<HTMLDivElement>):void=>{
        event.stopPropagation()
        const target:HTMLDivElement = event.currentTarget as HTMLDivElement
        const id:number=parseInt(target.id)
        const className:string=target.className
        if(className==="arrowLeftDiv"){
            const leftElement:[number, string, string] = currentTable.content[id-1]
            const temp:[number, string, string] = currentTable.content[id]
            if(leftElement==undefined || temp==undefined){
                return
            }
            const newContent:Array<[number, string, string]>=currentTable.content.map((currentCell, index)=>{
                switch (index) {
                    case id:
                        return leftElement;
                    case id - 1:
                        return temp;
                    default:
                        return currentCell;
                }
            })
            setCurrentTable((prevTable)=>{
                return {
                    ...prevTable,
                    content: newContent
                }
            })
            setCurrentId(-1)
        }else if(className==="arrowRightDiv"){
            const rightElement:[number, string, string] = currentTable.content[id+1]
            const temp:[number, string, string] = currentTable.content[id]
            if(rightElement==undefined || temp==undefined){
                return
            }
            const newContent:Array<[number, string, string]>=currentTable.content.map((currentCell, index)=>{
                switch (index) {
                    case id:
                        return rightElement;
                    case id + 1:
                        return temp;
                    default:
                        return currentCell;
                }
            })
            setCurrentTable((prevTable)=>{
                return {
                    ...prevTable,
                    content: newContent
                }
            })
            setCurrentId(-1)
        }
    }

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

    const handleCellClick=(event:React.MouseEvent<HTMLDivElement>):void=>{
        const target = event.currentTarget as HTMLDivElement
        const id:number=parseInt(target.id)
        if(id!==currentId){
            setCurrentId(id)
        }else{
            setCurrentId(-1)
        }
    }

    const removeColumn = ():void => {
        console.log(currentId)
        setCurrentTable((prevTable) => {
            return {
              ...prevTable,
              content: prevTable.content.filter((_, index) =>(
                index != currentId)
                )
            }
        })
        setCurrentId(-1)
    }

    const handleTableNameChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setCurrentTable((prevTable) => {
            if(event.target.value.length>25){
                return prevTable
            }
            return {
                ...prevTable, tableName:event.target.value
            }
        })
    }

    return(// Retornar componente para renderizar os componentes filhos
        <TablesContext.Provider value={{ currentTable, currentId, tablePreview, addColumn, handleTableNameChange, removeColumn, setCurrentId, handleCellClick, swapCells, handleCellModify, handlePreviewClick }}>
            <>{children}</> 
        </TablesContext.Provider>
    )
}

export { TablesProvider, TablesContext }