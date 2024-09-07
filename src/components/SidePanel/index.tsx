import CollapsibleContent from "./CollapsibleContent"
import Collapsible from "./Collapsible"
import { useContext } from "react"
import { SidePanelContext } from "../../contexts/SidePanel"
import { TablesContext } from "../../contexts/Tables"

const SidePanel = () => {
  const { isTitleShown, isColumnShown, toggleIsTitleShown, toggleIsColumnShown } = useContext(SidePanelContext)
  const { currentTable, currentId, changeTableName, handleCellModify } = useContext(TablesContext)
  const handleTableNameChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
    changeTableName(event.target.value)
  }

  return (
    <aside className="sidePanel">
        <div className="sidePanel-title">
          <h2>Dynamic Table</h2>
        </div>
        <Collapsible title="Title" toggleStateFunction={toggleIsTitleShown} />
        <CollapsibleContent stateShownValue={isTitleShown}>
          <label>Title: </label>
          <br/>
          <input value={currentTable.tableName} onChange={handleTableNameChange} placeholder="Type your title here..." type="text" />
        </CollapsibleContent>
        <Collapsible title="Visual" toggleStateFunction={toggleIsColumnShown} />
        <CollapsibleContent stateShownValue={isColumnShown}>
          <label>Column title: </label>
          <br/>
          <input id="columnName" value={currentId !== -1 ? currentTable.content[currentId][1] : ""} onChange={handleCellModify} placeholder="Type the column name here..." type="text" />
          <label>Cell content: </label>
          <br/>
          <input id="content" value={currentId !== -1 ? currentTable.content[currentId][2] : ""} onChange={handleCellModify} placeholder="Type the column name here..." type="text" />
        </CollapsibleContent>
    </aside>
  )
}

export default SidePanel