import { SidePanelProvider } from "./SidePanel"
import { TablesProvider } from "./Tables"

const AppProvider=({ children }: {children: React.ReactNode})=>{
    return (
            <SidePanelProvider>
                <TablesProvider>
                    {children}
                </TablesProvider>
            </SidePanelProvider>
    )
    
}

export default AppProvider