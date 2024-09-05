import { useContext } from "react"
import { ColorsContext } from "../contexts/Color"
import addColumnIcon from "./../assets/images/addColumnIcon.svg"
import deleteColumnIcon from "./../assets/images/deleteColumnIcon.svg"
import { TablesContext } from "../contexts/Tables"

const PreviewPanel = () => {
  const { primaryColor, secondaryColor, textColor } = useContext(ColorsContext)
  const { currentTable, addColumn, removeColumn } = useContext(TablesContext)
  return (
    <section style={{color: textColor}}  className="previewPanel">
        <div style={{ backgroundColor: secondaryColor}} className="tableContainer">
          <header style={{ backgroundColor: primaryColor}} className="tableContainer-header">
            <h5 className="tableContainer-header-title">{currentTable.tableName}</h5>
          </header>
          <table>
            <thead>
              <tr>
                {
                  currentTable.content.map((column, index) => {
                    return <th key={index}>{column[0]}</th>
                  })
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  currentTable.content.map((column, index) => (
                    <td key={index}>{column[1]}</td>
                  ))
                }
              </tr>
            </tbody>
          </table>
          <footer style={{ backgroundColor: primaryColor}} className="tableContainer-footer">
            <button onClick={removeColumn}><img src={deleteColumnIcon} className="removeColumnIcon"/> Remove column</button>
            <button onClick={addColumn}><img src={addColumnIcon} className="addColumnIcon"/> Add column</button>
          </footer>
        </div>
    </section>
  )
}

export default PreviewPanel