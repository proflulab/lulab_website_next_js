/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import "../app/globals.css";
import { Grid, Link } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneInfo, setPhoneInfo] = useState({ mobile: "", ctry_code: "" });
  const [verificationCode, setVerificationCode] = useState("");
  const [useEmail, setUseEmail] = useState(true);
  const [countdown, setCountdown] = useState(0);
  const handleChangeEmail = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleChangePhone = (newPhone: React.SetStateAction<string>) => {
    setPhone(newPhone);
  };

  const handleChangeVerificationCode = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setVerificationCode(event.target.value);
  };

  const handleSendEmailCode = async (method: string) => {
    try {
      if (method === "email") {
        await setVerificationCode(email);
      }
      setCountdown(60);
      startCountdown();
    } catch (error) {
      console.error("Error sending email verification code:", error);
    }
  };

  const handleSendPhoneCode = async (method: string) => {
    try {
      if (method === "phone") {
        await setVerificationCode(phone);
      }
      setCountdown(60);
      startCountdown();
    } catch (error) {
      console.error("Error sending SMS verification code:", error);
    }
  };

  const startCountdown = () => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      setCountdown(0);
    }, 60000);
  };

  const handleSignup = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid
        sx={{
          backgroundColor: "white",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-20 w-auto"
              src="/logo.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up for an account
            </h2>
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setUseEmail(!useEmail)}
                className="text-sm text-green-600 hover:text-green-500"
              >
                {useEmail ? "Use phone number" : "Use email address"}
              </button>
            </div>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
            <form className="space-y-6" onSubmit={handleSignup}>
              {useEmail ? (
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={handleChangeEmail}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <MuiTelInput onChange={handleChangePhone} value={phone} />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              )}

              <div className="text-sm">
                <label
                  htmlFor="verification-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Verification code
                </label>
                <div className="mt-2">
                  <input
                    id="verification-code"
                    name="verification-code"
                    type="text"
                    autoComplete="off"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                  />
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        if (useEmail) {
                          handleSendEmailCode("email"); // 传递标识以指示是通过邮箱发送验证码
                        } else {
                          handleSendPhoneCode("phone"); // 传递标识以指示是通过手机号发送验证码
                        }
                      }}
                      disabled={countdown > 0}
                      className="font-semibold text-green-600 hover:text-green-500"
                    >
                      {countdown > 0
                        ? `Resend in ${countdown} seconds`
                        : "Send verification code"}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-customGreen px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:
                  outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/Signin"
                className="font-semibold text-green-600 hover:text-green-500"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </Grid>
    </>
  );
}
