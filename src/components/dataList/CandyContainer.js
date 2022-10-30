import { useState } from "react"
import { FindCandy } from "./FindCandy"
import { CandySearch } from "./CandySearch"

export const CandyContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
    <CandySearch setterFunction={setSearchTerms} />
    <FindCandy searchTermState={searchTerms} />
    </>
}