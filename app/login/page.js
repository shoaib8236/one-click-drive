"use client";

import React, { useState, useEffect } from "react";

import { Form, Input, notification } from "antd";
import { StyledButton } from "@/components/StyledButton/StyledButton";
import Link from "next/link";
import AppLoader from "@/components/AppLoader/AppLoader";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const user = localStorage.getItem("user");
    if (user) {
      router.back()
    } else {
      setLoading(false);
    }
  }, [router]);

  const onFinish = (values) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === values.email) {
      router.push("/");
    } else {
      notification.error({
        message: "Error",
        description: "Invalid email or password",
      });
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <div className="login_wrapper">
          <div className="login_container">
            <h1 className="login_title">Login</h1>
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item
                className="styled_input"
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                className="styled_input password_style"
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              <div className="flex_end">
                <StyledButton className="md m_0" htmlType="submit">
                  Login
                </StyledButton>
              </div>

              <div className="dont_have_account">
                <p>
                  Don't have an account? <Link href="/register">Register</Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
