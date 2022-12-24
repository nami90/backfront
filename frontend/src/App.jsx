import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function getHello() {
    const greet = document.getElementById('greet')
    fetch(import.meta.env.VITE_API_SERVER + '/api/hello')
      .then(response => response.json())
      .then(data => greet.innerHTML = JSON.stringify(data))
  }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getHello();
  }, [count])

  return (
    <div className="App">
      <h3>테스트</h3>
      <p>야호! 배포 성공!</p>
      <p>CI/CD도 성공했어!</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        api called: <code id="greet"></code>
      </p>
    </div>
  )
}

export default App
