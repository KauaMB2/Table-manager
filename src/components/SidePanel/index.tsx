import CollapsibleContent from "./CollapsibleContent"
import Collapsible from "./Collapsible"
import { useContext } from "react"
import { ColorsContext } from "../../contexts/Color"
import { SidePanelContext } from "../../contexts/SidePanel"

const SidePanel = () => {
  const { isTitleShown, isColumnShown, isColorShown, toggleIsTitleShown, toggleIsColumnShown, toggleIsColorShown } = useContext(SidePanelContext)
  const { primaryColor, secondaryColor, setPrimaryColor, setSecondaryColor } = useContext(ColorsContext)
  const handlePrimaryColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrimaryColor(event.target.value)
  }
  const handleSecondaryColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondaryColor(event.target.value)
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
          <input placeholder="Type your title here..." type="text" />
        </CollapsibleContent>
        <Collapsible title="Visual" toggleStateFunction={toggleIsColumnShown} />
        <CollapsibleContent stateShownValue={isColumnShown}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </CollapsibleContent>
        <Collapsible title="Color" toggleStateFunction={toggleIsColorShown} />
        <CollapsibleContent stateShownValue={isColorShown}>
          <label>Primary Color: </label>
          <br/>
          <input type="color" value={primaryColor} onChange={handlePrimaryColorChange} />
          <br/>
          <label>Secondary Color: </label>
          <br/>
          <input type="color" value={secondaryColor} onChange={handleSecondaryColorChange} />
        </CollapsibleContent>
    </aside>
  )
}

export default SidePanel