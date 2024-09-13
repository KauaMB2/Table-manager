import { useContext } from "react"
import addColumnIcon from "./../../assets/images/addColumnIcon.svg"
import deleteColumnIcon from "./../../assets/images/deleteColumnIcon.svg"
import arrowLeft from "./../../assets/images/arrowLeft.svg"
import arrowRight from "./../../assets/images/arrowRight.svg"
import { TablesContext } from "../../contexts/Tables"

const styles = {
  secondaryColor:{
    backgroundColor:"#97CBFF"
  },
  primaryColor:{
    backgroundColor:"#C6E3FF"
  },
}

const PreviewPanel:React.FC = () => {
  const { currentTable, currentId, addColumn, removeColumn, handleCellClick, swapCells } = useContext(TablesContext)
  const { tablePreview, handlePreviewClick }=useContext(TablesContext)
  return (
    <section className="previewPanel">
      <div className="previewSwitch">
        <span>Preview mode</span>
        <label className="switch">
          <input onClick={handlePreviewClick} type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
        <div className="tableContainer">
          <div className="tableContainer-header">
            <h5 className="tableContainer-header-title">{currentTable.tableName}</h5>
          </div>
          <div className="table">
            <div className="tableContainer-body">
                {
                  currentTable.content.map((column, index) => {
                    return (
                      <div onClick={!tablePreview ? handleCellClick : ()=>{}} key={index} id={index.toString()} className="tableContainer-cell">
                        <div style={currentId ===index ? styles.secondaryColor : {} } className="tableContainer-body-columnName">
                          <span>{column[1]}</span>
                          <div style={tablePreview ? {display: "none"} : {}} className="arrowsDiv">
                            <img style={currentId ===index ? styles.primaryColor : {} } onClick={swapCells} id={index.toString()} className="arrowLeftDiv" width={15} height={15} src={arrowLeft} />
                            <img style={currentId ===index ? styles.primaryColor : {} } onClick={swapCells} id={index.toString()} className="arrowRightDiv" width={15} height={15} src={arrowRight} />
                          </div>
                        </div>
                        <div style={currentId ===index ? styles.primaryColor : {} } className="tableContainer-body-content">{column[2]}</div>
                      </div>
                    )
                  })
                }
            </div>
          </div>
          <div style={tablePreview ? {display: "none"} : {}} className="tableContainer-footer">
            <button disabled={currentId===-1 ? true : false} onClick={removeColumn}><img src={deleteColumnIcon} className="removeColumnIcon"/> Remove column</button>
            <button onClick={addColumn}><img src={addColumnIcon} className="addColumnIcon"/> Add column</button>
          </div>
        </div>
    </section>
  )
}

export default PreviewPanel