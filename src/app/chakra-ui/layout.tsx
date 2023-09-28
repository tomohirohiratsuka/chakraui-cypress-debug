import {FC, ReactNode} from "react";
import {ChakraUIProviders} from "@/providers/ChakraUIProviders";

const ChakraLayout: FC<{children: ReactNode}> = ({children}) => {
    return(
        <ChakraUIProviders>
            {children}
        </ChakraUIProviders>
    )
}

export default ChakraLayout;