import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter basename="/CryptoAbsolute-Client">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
