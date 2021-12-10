import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { mockAddordianData } from '../data/accordian.mocking'
import { AccordianInfoType } from '../types/accordian-data'
import { AccordianInfo } from '../components/AccordianInfo'
import styles from './index.module.css'
import useAccordians from '../hooks/useAccordians'

const Home: NextPage = () => {

  const [accordianInfoList, setAccordianInfoList] = useState<AccordianInfoType[]>()
  const { expandedAcocrdianIndex, onExpandAccordian } = useAccordians()
  useEffect(() => {
    // fetch accordian data
    setAccordianInfoList(mockAddordianData)
  }, [])
  return (
    <div className={styles.root}>
      <div className={styles.outerCard}>
        <div className={styles.contentWrapper}>
          <div>
            <p className={styles.faqTitle}>FAQ</p>
            {accordianInfoList?.map((accordianInfo, index) => (
              <AccordianInfo 
              key={index} 
              accordianInfo={accordianInfo} 
              isExpanded={accordianInfo.id === expandedAcocrdianIndex} 
              onExpandAccordian={onExpandAccordian}
            />
            )
            )}
          </div>
        </div>
      </div>
      {/* orange box image */}
      <img
        alt='orange box image'
        src='/illustration-box-desktop.svg'
        width='175'
        className={styles.orangeBoxImg}
      />



    </div>
  )
}

export default Home
