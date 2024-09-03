import { useContext } from "react"
import { ColorsContext } from "../contexts/Color"

const PreviewPanel = () => {
  const { primaryColor, secondaryColor } = useContext(ColorsContext)

  return (
    <section className="previewPanel">
        <div style={{ backgroundColor: secondaryColor}} className="tableContainer">
          <header style={{ backgroundColor: primaryColor}} className="tableContainer-header">
            <h5 className="tableContainer-header-title">My Table</h5>
          </header>
          <div>
            AAA
          </div>
          <footer style={{ backgroundColor: primaryColor}} className="tableContainer-footer">
            
          </footer>
        </div>
    </section>
  )
}

export default PreviewPanel