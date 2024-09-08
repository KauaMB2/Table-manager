import { useContext } from "react"
import { TablesContext } from "../../../contexts/Tables"
const Title=()=>{
    const { currentTable, handleTableNameChange } = useContext(TablesContext)
    return (
        <div className="modifyTitleDiv">
            <label>Title: </label>
            <input value={currentTable.tableName} onChange={handleTableNameChange} placeholder="Type your title here..." type="text" />
            {
                currentTable.tableName.length === 25 && <small className="errorMessage">The table name has a limit of 25 characters.</small>
            }
        </div>
    )
}

export default Title
