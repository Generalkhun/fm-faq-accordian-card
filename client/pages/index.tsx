import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './index.module.css'
const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.outerCard}>
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
