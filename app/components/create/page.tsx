"use client";
//第二个弹框
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import  { useState, useEffect } from "react";
import { MuiTelInput } from "mui-tel-input";
import { Grid, Link } from "@mui/material";
import firstmodal from "../page";
export default function phonepage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [useEmail, setUseEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
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

  const handleSendCode = () => {
    console.log("Sending verification code...");
    setCountdown(60);

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
      <Button
      onPress={onOpen}
      type="submit"
      className="flex w-full justify-center rounded-md bg-customGreen px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:
  outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</Button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          base: "bg-white",
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
          </div>
      {/* 开头 */}
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
              <form className="space-y-6" onSubmit={handleSignup}>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900">
                        <span style={{ color: 'red' }}>*</span>Create password
                      </label>
                  <div className="mt-2">
                    <input
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"/>
                   <h1 className="  text-xs text-gray-500">You can change this at any time afterwards.</h1>
                  </div>
                </div>
           
                <div className="text-sm">
                <label
                  htmlFor="verification-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <span style={{ color: 'red' }}>*</span>Create user name
                </label>
                <div className="mt-2">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                  />
                </div>
                <h1 className="  text-xs text-gray-500">You can change this at any time afterwards.</h1>
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
      </Modal>
    </>
  );
}

