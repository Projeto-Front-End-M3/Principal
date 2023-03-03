import { useState } from 'react'
import Router from './routes'
// import { GlobalStyles } from './styles/global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <GlobalStyles/> */}
      <Router/>
      <h1>Teste</h1>
    </div>
  )
}

export default App
