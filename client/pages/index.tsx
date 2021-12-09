import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { mockAddordianData } from '../data/accordian.mocking'
import { AccordianInfoType } from '../types/accordian-data'
import { AccordianInfo } from '../components/AccordianInfo'
import styles from './index.module.css'

const Home: NextPage = () => {
  const [accordianInfoList, setAccordianInfoList] = useState<AccordianInfoType[]>()
  useEffect(() => {
    setAccordianInfoList(mockAddordianData)
  }, [])
  return (
    <div className={styles.root}>
      <div className={styles.outerCard}>
        <div className={styles.contentWrapper}>
          <div>
            <h3>FAQ</h3>
            {accordianInfoList?.map((accordianInfo, index) =>
              <AccordianInfo key={index} accordianInfo={accordianInfo} />
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
