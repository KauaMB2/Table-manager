import { useContext } from "react"
import { ColorsContext } from "../contexts/Color"
import addColumnIcon from "./../assets/images/addColumnIcon.svg"
import deleteColumnIcon from "./../assets/images/deleteColumnIcon.svg"
import arrowLeft from "./../assets/images/arrowLeft.svg"
import arrowRight from "./../assets/images/arrowRight.svg"
import { TablesContext } from "../contexts/Tables"


const PreviewPanel = () => {
  const { primaryColor, secondaryColor, textColor } = useContext(ColorsContext)
  const { currentTable, addColumn, removeColumn } = useContext(TablesContext)
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
                      <div key={index} id={index.toString()} className="tableContainer-cell">
                        <div style={{ backgroundColor: secondaryColor}} className="tableContainer-body-columnName">
                          <span>{column[0]}</span>
                          <div style={{ backgroundColor: secondaryColor}} className="arrowsDiv">
                            <img width={18} height={18} src={arrowLeft} />
                            <img width={18} height={18} src={arrowRight} />
                          </div>
                        </div>
                        <div style={{ backgroundColor: primaryColor}} className="tableContainer-body-content">{column[1]}</div>
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