"use client"

import { SearchModal } from "@/components/modals/search-modal";
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) return null;

    return (
        <>
         <SearchModal />
        </>
    )
}