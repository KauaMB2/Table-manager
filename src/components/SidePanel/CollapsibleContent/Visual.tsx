import { useContext } from "react"
import { TablesContext } from "../../../contexts/Tables"
const Visual:React.FC=()=>{
    const { currentId, currentTable, handleCellModify } = useContext(TablesContext)
    return (
        <div className="modifyTitleDiv">
            <label>Column title: </label>
            <br/>
            <input disabled={currentId===-1 ? true : false} id="columnName" value={currentId !== -1 ? currentTable.content[currentId][1] : ""} onChange={handleCellModify} placeholder="Type the column name here..." type="text" />
            <br/>
            {
                currentId !== -1 && currentTable.content[currentId][1].length === 16 && <small className="errorMessage">The column name has a limit of 16 characters.</small>
            }
            <br/>
            <label>Cell content: </label>
            <br/>
            <input disabled={currentId===-1 ? true : false} id="content" value={currentId !== -1 ? currentTable.content[currentId][2] : ""} onChange={handleCellModify} placeholder="Type the column name here..." type="text" />
            {
                currentId !== -1 && currentTable.content[currentId][2].length === 160 && <small className="errorMessage">The cell content has a limit of 160 characters.</small>
            }
        </div>
    )
}

export default Visual
