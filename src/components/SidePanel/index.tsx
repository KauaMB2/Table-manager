import CollapsibleContent from "./CollapsibleContent"
import Collapsible from "./Collapsible"
import { useContext } from "react"
import { SidePanelContext } from "../../contexts/SidePanel"
import Title from "./CollapsibleContent/Title"
import Visual from "./CollapsibleContent/Visual"

interface SidePanelProps{
  tablePreview:boolean
}

const SidePanel:React.FC<SidePanelProps> = ({ tablePreview }) => {
  const { isTitleShown, isColumnShown, toggleIsTitleShown, toggleIsColumnShown } = useContext(SidePanelContext)
  return (
    <aside style={tablePreview ? {display: "none"} : {}} className="sidePanel">
        <div className="sidePanel-title">
          <h2>Dynamic Table</h2>
        </div>
        <Collapsible title="Title" toggleStateFunction={toggleIsTitleShown} />
        <CollapsibleContent stateShownValue={isTitleShown}>
          <Title />
        </CollapsibleContent>
        <Collapsible title="Visual" toggleStateFunction={toggleIsColumnShown} />
        <CollapsibleContent stateShownValue={isColumnShown}>
          <Visual />
        </CollapsibleContent>
    </aside>
  )
}

export default SidePanel