import { ColorsProvider } from "./Color"
import { SidePanelProvider } from "./SidePanel"

const AppProvider=({ children }: {children: React.ReactNode})=>{
    return (
        <ColorsProvider>
            <SidePanelProvider>
                {children}
            </SidePanelProvider>
        </ColorsProvider>
    )
}

export default AppProvider