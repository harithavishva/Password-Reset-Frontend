import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './Pages/home.js';
import Login from './Pages/login.js';
import Register from './Pages/register.js';
import Reset from './Pages/reset.js';
import ForgotPass from './Pages/forgotPass.js';

function App() {

  const PrivateRoute = () => {
    return (
      localStorage.getItem("authToken") ? <Outlet /> : <Navigate to='/login' />
    )
  }

  const PublicRoute = () => {
    return (
      localStorage.getItem("authToken") ? <Navigate to='/home' /> : <Outlet />
    )
  }

  return (
    <Routes>

      <Route element={<PrivateRoute />}>
        <Route path='/home' element={<Home />} />
      </Route>

      <Route element={<PublicRoute />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotPassword' element={<ForgotPass />} />
        <Route path='/resetPassword/:resetToken' element={<Reset />} />
      </Route>

      <Route path='/' element={<Navigate replace to='/login' />} />
      <Route path="*" element={<Navigate replace to="/login" />} />

    </Routes>
  );
}

export default App;