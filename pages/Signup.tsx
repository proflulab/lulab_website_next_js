/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import "../app/globals.css";
import { Button, Grid, Link } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [useEmail, setUseEmail] = useState(true);
  const [showSendButton, setShowSendButton] = useState(false);

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

  const handleSendCode = () => {
    console.log("Sending verification code...");
    setShowSendButton(false);
    // Your code to send verification code goes here
  };

  const handleSignup = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Your code to handle signup goes here
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
                className="text-sm text-indigo-600 hover:text-indigo-500"
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

              <div>
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
                      onClick={handleSendCode}
                      className="font-semibold text-indigo-600 hover:text-indigo-500 text-sm"
                    >
                      Send verification code
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/Signin"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
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
