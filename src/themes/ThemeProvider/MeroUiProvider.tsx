"use client"
import { Global } from "@emotion/react"
import { createContext } from "./create-context"

type SystemContext = {

}

const [MeroUIContextProvider, useChakraContext] = createContext({
    name: "MeroUIContext",
    strict: true,
    providerName: "<MeroUiProvider />",
})

export interface MeroUIProviderProps {
    value: SystemContext
    children: React.ReactNode
}

function ChakraProvider(props: MeroUIProviderProps) {
    const { value: sys, children } = props

    return (
        <MeroUIContextProvider value={sys}>
            {children}
        </MeroUIContextProvider>
    )
}

export { ChakraProvider, useChakraContext }