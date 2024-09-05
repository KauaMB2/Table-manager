import { ColorsProvider } from "./Color"
import { SidePanelProvider } from "./SidePanel"
import { TablesProvider } from "./Tables"

const AppProvider=({ children }: {children: React.ReactNode})=>{
    return (
        <ColorsProvider>
            <SidePanelProvider>
                <TablesProvider>
                    {children}
                </TablesProvider>
            </SidePanelProvider>
        </ColorsProvider>
    )
}

export default AppProvider