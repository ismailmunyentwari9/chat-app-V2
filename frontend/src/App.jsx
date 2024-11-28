import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Landing from "./pages/Landing/landing";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="">
      <Routes>
        {/* Redirect unauthenticated users to login */}
		<Route path="/" element={<Landing />} />


        {/* Login route */}
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />

        {/* Sign-up route */}
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />

        {/* Home route for authenticated users */}
        <Route path="/home" element={authUser ? <Home /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
