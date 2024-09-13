import React, { createContext, useState, useCallback } from "react"

interface SidePanelProps {
  isTitleShown: boolean
  isColumnShown: boolean
  toggleIsTitleShown: () => void
  toggleIsColumnShown: () => void
}

const SidePanelContext:React.Context<SidePanelProps> = createContext<SidePanelProps>({} as SidePanelProps)

const SidePanelProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTitleShown, setIsTitleShown] = useState<boolean>(false)
  const [isColumnShown, setIsColumnShown] = useState<boolean>(false)

  const toggleIsTitleShown = useCallback(() => {
    setIsTitleShown((prev) => {
        return !prev
    })
  }, [])

  const toggleIsColumnShown = useCallback(() => {
    setIsColumnShown((prev) => {
        return !prev
    })
  }, [])

  return (
    <SidePanelContext.Provider value={{ isTitleShown, isColumnShown, toggleIsTitleShown, toggleIsColumnShown }}>
      {children}
    </SidePanelContext.Provider>
  )
}

export { SidePanelProvider, SidePanelContext }
