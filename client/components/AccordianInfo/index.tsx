import React from 'react'
import { AccordianInfoType } from '../../types/accordian-data'

interface Props {
    accordianInfo:AccordianInfoType
}

export const AccordianInfo = ({accordianInfo}: Props) => {
    return (
        <div>
            <div>{accordianInfo.title}</div>
            <div>{accordianInfo.content}</div>
        </div>
    )
}
