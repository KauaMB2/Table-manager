interface CollapsibleContentProps{
    children: React.ReactNode
    stateShownValue:boolean
}

const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ children, stateShownValue }) => {
    return (
        <div style={{ display: stateShownValue ? 'block' : 'none' }} className="collapsible-content">
            {children}
        </div>
    )
}

export default CollapsibleContent
