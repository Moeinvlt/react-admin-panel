import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Alert } from "../../utils/alerts";
import { logoutService } from "../../services/auth";

const Logout = () => {
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    try {
      const res = await logoutService();
      if (res.status == 200) {
        localStorage.removeItem("loginToken");
        setLoading(false);
      } else {
        Alert("متاسفم!", res.data.message, "error");
      }
    } catch (error) {
      setLoading(false);
      Alert("متاسفم!", "متسفانه مشکلی در سمت سرور وجود داره", "error");
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
      {loading ? (
        <h1 className="text-center">لطفا صبر کنید...</h1>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </>
  );
};

export default Logout;
