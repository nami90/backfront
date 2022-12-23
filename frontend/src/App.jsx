import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3>테스트</h3>
      <p>야호! 배포 성공!</p>
      <p>CI/CD도 성공했어!</p>
    </div>
  )
}

export default App
