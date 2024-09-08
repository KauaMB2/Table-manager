import BottomBar from "./components/BottomBar"
import PreviewPanel from "./components/PreviewPanel"
import SidePanel from './components/SidePanel'
import { TablesContext } from "./contexts/Tables"
import { useContext } from "react"

const App=()=>{
  const { tablePreview }=useContext(TablesContext)
  return (
    <main style={tablePreview ? { gridTemplateColumns: "100%" } : {}} id="mainContainer">
      <PreviewPanel />
      <SidePanel tablePreview={tablePreview} />
      <BottomBar />
    </main>
  )
}

export default App
