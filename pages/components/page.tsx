/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  Button,
  Link,
} from "@nextui-org/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import supabase from "../lib/supabaseClient";

export default function FirstModal() {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [useEmail, setUseEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [checkingPhone, setCheckingPhone] = useState(false);
  const [validPhone, setValidPhone] = useState(true);
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [usePassword, setUsePassword] = useState(true);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [verificationError, setVerificationError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleOpenFirst = () => {
    setIsLogin(false); // 注册模式
    setIsOpenFirst(true);
  };

  const handleOpenSecond = () => {
    setIsLogin(true); // 登录模式
    setIsOpenSecond(true);
  };

  const handleCloseFirstAndOpenSecond = () => {
    setIsOpenFirst(false);
    handleOpenSecond();
  };

  const handleCloseSecondAndOpenFirst = () => {
    setIsOpenSecond(false);
    handleOpenFirst();
  };

  const handleCloseSecond = () => {
    setIsOpenSecond(false);
  };

  const handleCloseFirst = () => {
    setIsOpenFirst(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePhone = (newPhone: string) => {
    setPhone(newPhone);
    // Clear phone error when user changes phone number
    setPhoneError("");
  };

  const handleChangeVerificationCode = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerificationCode(event.target.value);
  };

  const handleVerificationCodeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setVerificationCode(e.target.value);
    if (verificationError) {
      setVerificationError(false); // 用户开始修改验证码时重置错误状态
    }
  };

  const handleFocus = () => {
    if (verificationError) {
      setVerificationError(false); // 用户点击输入框时重置错误状态
    }
  };

  const checkPhoneExists = async (phoneNumber: string) => {
    try {
      const response = await fetch("/api/checkPhone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber }),
      });
      const result = await response.json();
      if (response.ok) {
        return result.exists; // Returns true if phone exists in the database
      } else {
        throw new Error(result.error || "Error checking phone number.");
      }
    } catch (error) {
      console.error("Error during phone check:", error);
      return false;
    }
  };

  const handleSendCode = async () => {
    if (isLogin && !validPhone) {
      console.log("error");
      return; // 登录模式下，如果手机号无效则不发送验证码
    }

    console.log("Sending verification code...");
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      setCountdown(0);
    }, 60000);

    try {
      const endpoint = isOpenFirst ? "/api/signup" : "/api/signin";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Send verifycaton code successful:", result.data);
      } else {
        console.error("Error during send verifycaton code:", result.error);
        setVerificationError(true); // Set error state if signup fails
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setVerificationError(true); // 设置错误状态
    }
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const endpoint = isOpenFirst ? "/api/signup" : "/api/signin";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          otp: verificationCode,
          type: "sms",
        }),
      });

      const result = await response.json();
      const { access_token, refresh_token } = result;
      console.log(access_token, refresh_token);

      const { data, error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });
      console.log("successful to set session:", data);

      if (error) {
        console.error("Error setting session:", error.message);
      }

      if (response.ok) {
        window.location.href = "/";
      } else {
        console.error("Error during submit:", result.error);
        setVerificationError(true);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setVerificationError(true);
    }
  };

  useEffect(() => {
    if (phone) {
      setCheckingPhone(true);
      checkPhoneExists(phone).then(exists => {
        if (isLogin) {
          // 登录逻辑
          setValidPhone(exists); // 只有手机号存在才是有效的
          setPhoneError(
            exists ? "" : "This phone number is not registered. Please sign up."
          );
        } else {
          // 注册逻辑
          setValidPhone(!exists); // 只有手机号不存在才是有效的
          setPhoneError(exists ? "This phone number is already in use." : "");
        }
        setCheckingPhone(false);
      });
    }
  }, [phone, isLogin]);

  return (
    <>
      <Button
        onPress={handleOpenFirst}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Sign up
      </Button>

      <Modal
        backdrop="opaque"
        isOpen={isOpenFirst}
        onOpenChange={setIsOpenFirst}
        radius="lg"
        classNames={{
          base: "bg-white",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <img
              className="mx-auto h-20 w-auto"
              src="/logo.png"
              alt="Your Company"
            />
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
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
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {useEmail ? (
                  <>
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
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                          onChange={handleChangeEmail}
                          value={email}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Create password
                      </label>
                      <div className="mt-2 relative">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          required
                          className="block w-full pr-10 rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                        />
                        <div
                          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                          onClick={toggleShowPassword}
                        >
                          {showPassword ? (
                            <AiFillEyeInvisible className="h-5 w-5 text-gray-500" />
                          ) : (
                            <AiFillEye className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone number
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <PhoneInput
                        country={"cn"}
                        autoFormat={false}
                        value={phone}
                        onChange={handleChangePhone}
                        inputStyle={{
                          width: "100%",
                          color: "black",
                          borderRadius: "0.375rem",
                          borderColor: phoneError ? "red" : "#D3D3D3", // Red border if error
                        }}
                        dropdownStyle={{
                          color: "black",
                        }}
                        containerClass={`block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ${
                          phoneError ? "border-red-600" : "#D3D3D3"
                        }`}
                        inputClass="focus:ring-2 focus:ring-inset focus:ring-green-500"
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoFocus: true,
                        }}
                      />
                    </div>
                    {phoneError && (
                      <p className="ml-3 text-red-600 text-sm flex items-center">
                        {phoneError}
                      </p>
                    )}
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
                      className={`block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                        verificationError
                          ? "ring-red-500 focus:ring-red-500"
                          : "ring-gray-300 focus:ring-customGreen"
                      }`}
                      onChange={handleVerificationCodeChange}
                      value={verificationCode}
                      onFocus={handleFocus} // 用户开始输入时重置错误状态
                    />
                    {verificationError && (
                      <p className="mt-2 text-sm text-red-600">
                        {verificationError}
                      </p>
                    )}
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={handleSendCode}
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
                    className="flex w-full justify-center rounded-md bg-customGreen px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <p className="mt-4 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  href="#"
                  className="text-green-600 font-semibold leading-6 hover:text-green-500 focus:ring-customGreen"
                  onClick={handleCloseFirstAndOpenSecond} // 关联函数
                >
                  Sign in
                </Link>
              </p>
            </div>
          </ModalHeader>
        </ModalContent>
      </Modal>

      {/* 第二个弹窗 */}
      <Modal
        backdrop="opaque"
        isOpen={isOpenSecond}
        onOpenChange={setIsOpenSecond}
        radius="lg"
        classNames={{
          base: "bg-white",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <img
              className="mx-auto h-20 w-auto"
              src="/logo.png"
              alt="Your Company"
            />
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
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

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
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
                      <PhoneInput
                        country={"cn"}
                        autoFormat={false}
                        value={phone}
                        onChange={handleChangePhone}
                        inputStyle={{
                          width: "100%",
                          color: "black",
                          borderRadius: "0.375rem",
                          borderColor: phoneError ? "red" : "#D3D3D3", // Red border if error
                        }}
                        dropdownStyle={{
                          color: "black",
                        }}
                        containerClass={`block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ${
                          phoneError ? "border-red-600" : "#D3D3D3"
                        }`}
                        inputClass="focus:ring-2 focus:ring-inset focus:ring-green-500"
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoFocus: true,
                        }}
                      />
                    </div>
                    {phoneError && (
                      <p className="ml-3 text-red-600 text-sm flex items-center">
                        {phoneError}
                      </p>
                    )}
                  </div>
                )}

                {usePassword ? (
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                ) : (
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
                        className={`block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                          verificationError
                            ? "ring-red-500 focus:ring-red-500"
                            : "ring-gray-300 focus:ring-customGreen"
                        }`}
                        onChange={handleVerificationCodeChange}
                        value={verificationCode}
                        onFocus={handleFocus} // 用户开始输入时重置错误状态
                      />
                      {verificationError && (
                        <p className="mt-2 text-sm text-red-600">
                          Invalid verification code
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* <div className="mt-6">
                      <button
                        type="button"
                        onClick={handleSendCode}
                        disabled={countdown > 0}
                        className="font-semibold text-green-600 hover:text-green-500"
                      >
                        {countdown > 0
                          ? `Resend in ${countdown} seconds`
                          : "Send verification code"}
                      </button>
                    </div> */}
                {!usePassword && (
                  <div className="text-sm">
                    <button
                      type="button"
                      onClick={handleSendCode}
                      className="font-semibold text-green-600 hover:text-green-500"
                      disabled={countdown > 0}
                    >
                      {countdown > 0
                        ? `Resend in ${countdown} seconds`
                        : "Send verification code"}
                    </button>
                  </div>
                )}

                <div className="text-sm">
                  <button
                    type="button"
                    onClick={() => setUsePassword(!usePassword)}
                    className="font-semibold text-green-600 hover:text-green-500"
                  >
                    {usePassword ? "Use verification code" : "Use password"}
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-customGreen px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <p className="mt-4 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  href="#"
                  className="text-green-600 font-semibold leading-6 hover:text-green-500 focus:ring-customGreen"
                  onClick={handleCloseSecondAndOpenFirst} // 关联函数
                >
                  Sign up
                </Link>
              </p>
            </div>
          </ModalHeader>
        </ModalContent>
      </Modal>
    </>
  );
}
