import { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import styles from '../styles/Home.module.css'
import Issue from '../components/Issue'
import Cancel from '../components/Cancel'

const componentState = (state) => {
  switch (state) {
    case 'issue':
      return <Issue />
    case 'cancel':
      return <Cancel />
    default:
      break
  }
}
function Home() {
  const [state, setState] = useState('issue')
  return (
    <div className={styles.container}>
      <button onClick={() => setState('issue')}>Issue</button>
      <button onClick={() => setState('cancel')}>Cancel</button>
      <div>{componentState(state)}</div>
    </div>
  )
}

export default Home
Home.Layout = MainLayout
