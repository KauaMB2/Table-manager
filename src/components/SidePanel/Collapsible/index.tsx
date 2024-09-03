import dropdownIcon from "./../../../assets/images/dropdownIcon.png"
import visualIcon from "./../../../assets/images/visualIcon.png"
import colorIcon from "./../../../assets/images/colorIcon.png"
import titleIcon from "./../../../assets/images/titleIcon.png"

type CollapsibleTitle = "Title" | "Visual" | "Color";

interface CollapsibleProps {
    title: CollapsibleTitle;
    toggleStateFunction: () => void
}

const Collapsible: React.FC<CollapsibleProps>=({title, toggleStateFunction})=> {
    const imageHashTable: Record<CollapsibleTitle, string> = {
        "Title": titleIcon,
        "Visual": visualIcon,
        "Color": colorIcon
    }
    return (
        <div className="collapsible" onClick={toggleStateFunction}>
            <img className="collapsible-icon" src={imageHashTable[title]} alt={`${title} icon`}/>
            <div className="collapsible-title">
                <strong>{title}</strong>
            </div>
            <img className="collapsible-icon" src={dropdownIcon} alt="Dropdown icon"/>
        </div>
    )
}

export default Collapsible