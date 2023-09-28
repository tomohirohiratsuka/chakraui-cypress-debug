'use client'

import {CacheProvider} from '@chakra-ui/next-js'
import {ChakraProvider} from '@chakra-ui/react'
import {ReactNode} from "react";
import theme from "@/themes/defaultTheme";

export function ChakraUIProviders({children}: { children: ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}
