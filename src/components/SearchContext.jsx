import { createContext, useState } from "react"

export const SearchContext = createContext()

export function SearchProvider({children}) {
    const [searchData, setSearchData] = useState(null)

    return (
        <SearchContext.Provider value={{ searchData, setSearchData }}>
            {children}
        </SearchContext.Provider>
    )
}
