import CollapsibleContent from "./CollapsibleContent"
import Collapsible from "./Collapsible"
import { useContext } from "react"
import { ColorsContext } from "../../contexts/Color"
import { SidePanelContext } from "../../contexts/SidePanel"
import { TablesContext } from "../../contexts/Tables"

const SidePanel = () => {
  const { isTitleShown, isColumnShown, isColorShown, toggleIsTitleShown, toggleIsColumnShown, toggleIsColorShown } = useContext(SidePanelContext)
  const { primaryColor, secondaryColor, textColor, setPrimaryColor, setSecondaryColor, setTextColor, resetColors } = useContext(ColorsContext)
  const { currentTable, changeTableName } = useContext(TablesContext)
  const handlePrimaryColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrimaryColor(event.target.value)
  }
  const handleSecondaryColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondaryColor(event.target.value)
  }
  const handleTextColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(event.target.value)
  }
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </CollapsibleContent>
        <Collapsible title="Color" toggleStateFunction={toggleIsColorShown} />
        <CollapsibleContent stateShownValue={isColorShown}>
          <div className="colorsDiv">
            <div className="colorDiv">
              <label>Primary Color: </label>
              <input type="color" value={primaryColor} onChange={handlePrimaryColorChange} />
            </div>
            <div className="colorDiv">
              <label>Secondary Color: </label>
              <input type="color" value={secondaryColor} onChange={handleSecondaryColorChange} />
            </div>
            <div className="colorDiv">
              <label>Text Color: </label>
              <input type="color" value={textColor} onChange={handleTextColor} />
            </div>
          </div>
          <button className="resetColorBtn" onClick={resetColors}>Reset colors</button>
        </CollapsibleContent>
    </aside>
  )
}

export default SidePanel