import { useState } from 'react'
import Router from './routes'
// import { GlobalStyles } from './styles/global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <GlobalStyles/> */}
      <Router/>
    </div>
  )
}

export default App
