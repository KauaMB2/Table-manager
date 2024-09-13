import { useCallback, useContext, useState } from "react"
import titleIcon from "./../../assets/images/titleIcon.png"
import visualIcon from "./../../assets/images/visualIcon.png"
import { TablesContext } from "../../contexts/Tables"
import Title from "../SidePanel/CollapsibleContent/Title"
import Visual from "../SidePanel/CollapsibleContent/Visual"
import Modal from "../Modal"

const BottomBar:React.FC = () => {
    const { tablePreview }=useContext(TablesContext)
    const [ modalTitle, setModalTitle]=useState<string>("")
    const [ childComponent, setChildComponent]=useState<React.ReactNode>(null)
    const handleButtonClick = useCallback((event: React.MouseEvent<HTMLDivElement>): void => {
        const target:HTMLDivElement = event.currentTarget as HTMLDivElement
        switch (target.id) {
            case "titleBottomButton":
                setChildComponent(<Title />)
                setModalTitle("Title")
                break
            case "visualBottomButton":
                setChildComponent(<Visual />)
                setModalTitle("Visual")
                break
            default:
                break
        }
      }, [])
    
      const handleCloseModal = useCallback((): void => {
        setModalTitle("")
        setChildComponent(null)
      }, [])
    return (
        <>
            <Modal handleCloseModal={handleCloseModal} modalTitle={modalTitle}>
                {childComponent}
            </Modal>
            <div style={tablePreview ? { display: "none" } : {}} className="bottomBar">
                <div onClick={handleButtonClick} id="titleBottomButton" className="bottomButton">
                    <img src={titleIcon} />
                    <span>Title</span>
                </div>
                <div onClick={handleButtonClick} id="visualBottomButton" className="bottomButton">
                    <img src={visualIcon} />
                    <span>Visual</span>
                </div>
            </div>
        </>
    )
}

export default BottomBar