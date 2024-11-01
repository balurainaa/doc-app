import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from"./pages/Registerfile";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/"element={<Homepage/>} />
      <Route path='/login' element={<Login />}  />
      <Route path='/register' element={<Register/>} />
      <Route path="/register/login" element={<Navigate to="/login" />} />
      <Route path="/login/register" element={<Navigate to="/register" />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
