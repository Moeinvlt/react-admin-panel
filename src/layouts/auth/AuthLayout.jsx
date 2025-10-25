import { Navigate, Route, Routes } from "react-router";
import Login from "../../pages/auth/Login";
import { useIsLogin } from "../../hooks/AuthHook";

const AuthLayout = () => {
  const [loading, isLogin] = useIsLogin();

  return (
    <div className="limiter">
      {loading ? (
        <h1 className="text-center">کمی صبر کنید...</h1>
      ) : !isLogin ? (
        <div className="container-login100">
          <Routes>
            <Route path="/auth/login" element={<Login />} />
          </Routes>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};

export default AuthLayout;
