import { useState } from 'react'
import SkillTitle from './components/SkillTitle'
import './App.css'
import CardTable from './components/CardTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SkillTitle title={"Skills list"} />
      <CardTable />
    </>
  )
}

export default App
