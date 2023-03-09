import Router from './routes'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle, Reset } from './styles/global';

function App() {

  return (
    <div className="App">
      <Router/>
      <Reset/>
      <GlobalStyle/>
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
