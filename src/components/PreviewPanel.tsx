import { useContext } from "react"
import { ColorsContext } from "../contexts/Color"
import addColumnIcon from "./../assets/images/addColumnIcon.svg"
import deleteColumnIcon from "./../assets/images/deleteColumnIcon.svg"
import arrowLeft from "./../assets/images/arrowLeft.svg"
import arrowRight from "./../assets/images/arrowRight.svg"
import { TablesContext } from "../contexts/Tables"


const PreviewPanel = () => {
  const { primaryColor, secondaryColor, textColor } = useContext(ColorsContext)
  const { currentTable, addColumn, removeColumn, handleCellClick, swapCells } = useContext(TablesContext)
  return (
    <section style={{color: textColor}}  className="previewPanel">
        <div style={{ backgroundColor: primaryColor}} className="tableContainer">
          <header style={{ backgroundColor: primaryColor}} className="tableContainer-header">
            <h5 className="tableContainer-header-title">{currentTable.tableName}</h5>
          </header>
          <div className="table" style={{ backgroundColor: primaryColor}}>
            <div style={{ backgroundColor: primaryColor}} className="tableContainer-body">
                {
                  currentTable.content.map((column, index) => {
                    return (
                      <div onClick={handleCellClick} key={index} id={index.toString()} className="tableContainer-cell">
                        <div style={{ backgroundColor: secondaryColor}} className="tableContainer-body-columnName">
                          <span>{column[1]}</span>
                          <div style={{ backgroundColor: secondaryColor}} className="arrowsDiv">
                            <img style={{ backgroundColor: primaryColor}} onClick={swapCells} id={index.toString()} className="arrowLeftDiv" width={15} height={15} src={arrowLeft} />
                            <img style={{ backgroundColor: primaryColor}} onClick={swapCells} id={index.toString()} className="arrowRightDiv" width={15} height={15} src={arrowRight} />
                          </div>
                        </div>
                        <div style={{ backgroundColor: primaryColor}} className="tableContainer-body-content">{column[2]}</div>
                      </div>
                    )
                  })
                }
            </div>
          </div>
          <footer style={{ backgroundColor: primaryColor}} className="tableContainer-footer">
            <button onClick={removeColumn}><img src={deleteColumnIcon} className="removeColumnIcon"/> Remove column</button>
            <button onClick={addColumn}><img src={addColumnIcon} className="addColumnIcon"/> Add column</button>
          </footer>
        </div>
    </section>
  )
}

export default PreviewPanel