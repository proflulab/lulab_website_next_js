/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, Button } from "@nextui-org/react";
import { MuiTelInput } from "mui-tel-input";

export default function FirstModal() {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);

  const handleOpenFirst = () => {
    setIsOpenFirst(true);
  };

  const handleCloseFirstAndOpenSecond = () => {
    setIsOpenFirst(false);
    setIsOpenSecond(true);
  };

  const handleCloseSecond = () => {
    setIsOpenSecond(false);
  };

  const [useEmail, setUseEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(0);

  const handleChangeEmail = (event: { target: { value: string } }) => {
    setEmail(event.target.value);
  };

  const handleChangePhone = (newPhone: string) => {
    setPhone(newPhone);
  };

  const handleChangeVerificationCode = (event: {
    target: { value: string };
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
      <Button onClick={handleOpenFirst} color="primary">
        Sign up
      </Button>

      <Modal
        backdrop="opaque"
        isOpen={isOpenFirst}
        onOpenChange={handleCloseFirstAndOpenSecond}
        radius="lg"
        classNames={{
          base: "bg-white",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2 p-6">
                <img
                  className="mx-auto h-16 w-auto"
                  src="/logo.png"
                  alt="Your Company"
                />
                <h2 className="text-center text-3xl font-semibold text-gray-900">
                  Sign up for an account
                </h2>
                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => setUseEmail(!useEmail)}
                    className="text-sm text-green-600 hover:text-green-500 focus:outline-none"
                  >
                    {useEmail ? "Use phone number" : "Use email address"}
                  </button>
                </div>
                <div className="mt-6">
                  <form className="space-y-6" onSubmit={handleSignup}>
                    {useEmail ? (
                      <>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="block w-full rounded-md border-gray-300 py-2 px-3 text-green-700 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 sm:text-sm"
                              value={email}
                              onChange={handleChangeEmail}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Create password
                          </label>
                          <div className="mt-2">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="block w-full rounded-md border-gray-300 py-2 px-3 text-green-700 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Phone number
                        </label>
                        <div className="flex items-center mt-2 rounded-md border-gray-300 shadow-sm">
                          <MuiTelInput
                            onChange={handleChangePhone}
                            value={phone}
                            sx={{
                              "& .MuiInputBase-root": {
                                height: "40px",
                                padding: "0 12px",
                                fontSize: "0.875rem",
                              },
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <div className="text-sm">
                      <label
                        htmlFor="verification-code"
                        className="block text-sm font-medium text-gray-900"
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
                          className="block w-full rounded-md border-gray-300 py-2 px-3 text-green-700 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 sm:text-sm"
                          value={verificationCode}
                          onChange={handleChangeVerificationCode}
                        />
                        <div className="mt-4">
                          <button
                            type="button"
                            onClick={handleSendCode}
                            disabled={countdown > 0}
                            className="font-semibold text-green-600 hover:text-green-500 focus:outline-none"
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
                        className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </ModalHeader>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
