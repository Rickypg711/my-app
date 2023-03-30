'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface props {
    children? : ReactNode
}
const queryClient = new QueryClient();

const QueryWrapper = ({children}: props) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)

export default QueryWrapper;