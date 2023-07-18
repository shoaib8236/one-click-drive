"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AppLoader from "../AppLoader/AppLoader";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    // If not, redirect to login page

    let user = localStorage.getItem("user");

    console.log(children, user);

    if (!user) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  return loading ? <AppLoader /> : <>{children}</>;
};

export default PrivateRoute;
