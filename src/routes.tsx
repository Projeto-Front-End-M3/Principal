import { Route, Routes } from "react-router-dom";

const Router = () => 

  (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/register' element={<></>} />
      <Route path='/shop' element={<></> } />
      <Route path='/dashboard' element={<></> } />
    </Routes>
  );

export default Router;