import React, { useState } from 'react'
import { AccordianInfoType } from '../types/accordian-data'

interface Props {
    //accordianInfo: AccordianInfoType[],
}

const useAccordians = () => {
    const [expandedAcocrdianIndex, setExpandedAcocrdianIndex] = useState<number>(0)

    const onExpandAccordian = (id:number) => {
        const selectedExpandedAccordianId = id
        if (expandedAcocrdianIndex === selectedExpandedAccordianId) {
            setExpandedAcocrdianIndex(0)
            return
        }
        setExpandedAcocrdianIndex(selectedExpandedAccordianId)
    }
    return ({
        expandedAcocrdianIndex,
        onExpandAccordian
    })
}

export default useAccordians
