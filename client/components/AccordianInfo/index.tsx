import React from 'react'
import { AccordianInfoType } from '../../types/accordian-data'
import styles from './accordian.module.css'

interface Props {
    accordianInfo: AccordianInfoType,
    isExpanded: boolean,
    onExpandAccordian: (id: number) => void
}

export const AccordianInfo = ({ accordianInfo, isExpanded, onExpandAccordian }: Props) => {
    return (
        <div>
            <button
                onClick={() => onExpandAccordian(accordianInfo.id)}
                className={isExpanded ? styles.accordionExpanded : styles.accordion}
            >{accordianInfo.title}
            </button>
            {isExpanded && <div className={styles.accordianContent}>{accordianInfo.content}</div>}
        </div>
    )
}
