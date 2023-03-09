import { useState } from 'react'
import Router from './routes'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import { GlobalStyles } from './styles/global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <GlobalStyles/> */}
      <Router/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
