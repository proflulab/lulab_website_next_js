import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalContent, ModalHeader, Button, Link } from "@nextui-org/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styles from '../Signin.module.css';

export default function FirstModal() {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [useEmail, setUseEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [usePassword, setUsePassword] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false); // State to manage password visibility
  const firstModalRef = useRef<HTMLDivElement>(null);
  const secondModalRef = useRef<HTMLDivElement>(null);

  const handleChange = (newPhone: string) => {
    setPhone(newPhone);
  };

  const handleOpenFirst = () => {
    setIsOpenFirst(true);
  };

  const handleCloseFirst = () => {
    setIsOpenFirst(false);
  };

  const handleCloseFirstAndOpenSecond = () => {
    setIsOpenFirst(false);
    setIsOpenSecond(true);
  };

  const handleCloseSecondAndOpenFirst = () => {
    setIsOpenSecond(false);
    setIsOpenFirst(true);
  };

  const handleCloseSecond = () => {
    setIsOpenSecond(false);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePhone = (newPhone: string) => {
    setPhone(newPhone);
  };

  const handleChangeVerificationCode = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your signup logic here
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutsideFirst = (event: MouseEvent) => {
      if (firstModalRef.current && !firstModalRef.current.contains(event.target as Node)) {
        // setIsOpenFirst(false); // Remove this line to disable closing the modal on outside click
      }
    };

    const handleClickOutsideSecond = (event: MouseEvent) => {
      if (secondModalRef.current && !secondModalRef.current.contains(event.target as Node)) {
        // handleCloseSecond(); // Remove this line to disable closing the modal on outside click
      }
    };

    if (isOpenFirst) {
      document.addEventListener("mousedown", handleClickOutsideFirst);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideFirst);
    }

    if (isOpenSecond) {
      document.addEventListener("mousedown", handleClickOutsideSecond);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideSecond);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideFirst);
      document.removeEventListener("mousedown", handleClickOutsideSecond);
    };
  }, [isOpenFirst, isOpenSecond]);

  return (
    <>
      <Button onPress={handleOpenFirst} style={{ backgroundColor: "black", color: "white" }}>
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
        closeButton
        onClose={handleCloseFirst} // Ensure the onClose handler is defined and correctly used
      >
        <div ref={firstModalRef}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              <img className="mx-auto h-20 w-auto" src="/logo.png" alt="Your Company" />
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
                <form className="space-y-6" onSubmit={handleSignup}>
                  {useEmail ? (
                    <>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6 ${styles.autofillFix}`}
                            onChange={handleChangeEmail}
                            value={email}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          Create password
                        </label>
                        <div className="mt-2">
                          <div className="relative">
                            <input
                              id="password"
                              name="password"
                              type={passwordVisible ? "text" : "password"}
                              autoComplete="current-password"
                              required
                              style={{ color: "black" }}
                              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6 pr-10"
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={togglePasswordVisibility}
                            >
                              <FontAwesomeIcon
                                icon={passwordVisible? faEye : faEyeSlash}
                                className="h-5 w-5 text-gray-500"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone number
                      </label>
                      <PhoneInput
                        country={"us"}
                        value={phone}
                        onChange={handleChange}
                        inputStyle={{
                          width: "100%",
                          height: "40px",
                          fontSize: "16px",
                          borderRadius: "4px",
                          borderColor: "#ccc",
                          color: "black",
                        }}
                      />
                      <style jsx global>{`
                        .react-tel-input .form-control:focus {
                          border-color: #89d36f !important;
                          box-shadow: 0 0 0 1px #89d36f !important;
                        }
                        .react-tel-input .flag-dropdown .country-list .country-name {
                          color: black !important; // 设置国家名称颜色为黑色
                        }
                      `}</style>
                    </div>
                  )}
                  <div className="text-sm">
                    <label htmlFor="verification-code" className="block text-sm font-medium leading-6 text-gray-900">
                      Verification code
                    </label>
                    
                    <div className="mt-2">
                      <input
                        id="verification-code"
                        name="verification-code"
                        type="text"
                        autoComplete="off"
                        required
                        style={{ color: "black" }}
                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                        onChange={handleChangeVerificationCode}
                        value={verificationCode}
                      />
                      <div className="mt-6">
                        <button
                          type="button"
                          onClick={handleSendCode}
                          disabled={countdown > 0}
                          className="font-semibold text-green-600 hover:text-green-500"
                        >
                          {countdown > 0 ? `Resend in ${countdown} seconds` : "Send verification code"}
                        </button>
                      </div>
                      <br></br>
                    </div>
                    <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-customGreen px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign up
                    </button>
                  </div>
                  </div>
                </form>
                <p className="mt-4 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link
                    href="#"
                    className="text-green-600 font-semibold leading-6 hover:text-green-500 focus:ring-customGreen"
                    onClick={handleCloseFirstAndOpenSecond}
                  >
                    Sign in
                  </Link>
                </p>
              </div>
              
            </ModalHeader>
          </ModalContent>
        </div>
      </Modal>

      {/* 第二个弹框 */}
      <Modal
        backdrop="opaque"
        isOpen={isOpenSecond}
        onOpenChange={setIsOpenSecond}
        radius="lg"
        classNames={{
          base: "bg-white",
        }}
        closeButton
        onClose={handleCloseSecond} // Ensure the onClose handler is defined and correctly used
      >
        <div ref={secondModalRef}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              <img className="mx-auto h-20 w-auto" src="/logo.png" alt="Your Company" />
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
                <form className="space-y-6" action="#" method="POST">
                  {useEmail ? (
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6 ${styles.autofillFix}`}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone number
                      </label>
                      <PhoneInput
                        country={"us"}
                        value={phone}
                        onChange={handleChange}
                        inputStyle={{
                          width: "100%",
                          height: "40px",
                          fontSize: "16px",
                          borderRadius: "4px",
                          borderColor: "#ccc",
                          color: "black",
                        }}
                      />
                      <style jsx global>{`
                        .react-tel-input .form-control:focus {
                          border-color: #89d36f !important;
                          box-shadow: 0 0 0 1px #89d36f !important;
                        }
                        .react-tel-input .flag-dropdown .country-list .country-name {
                          color: black !important; // 设置国家名称颜色为黑色
                        }
                      `}</style>
                    </div>
                  )}

                  {usePassword ? (
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="mt-2">
                        <div className="relative">
                          <input
                            id="password"
                            name="password"
                            type={passwordVisible ? "text" : "password"}
                            autoComplete="current-password"
                            required
                            style={{ color: "black" }}
                            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6 pr-10"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={togglePasswordVisibility}
                          >
                            <FontAwesomeIcon
                              icon={passwordVisible ? faEye: faEyeSlash }
                              className="h-5 w-5 text-gray-500"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="verification-code" className="block text-sm font-medium leading-6 text-gray-900">
                        Verification code
                      </label>
                      <div className="mt-2">
                        <input
                          id="verification-code"
                          name="verification-code"
                          type="text"
                          autoComplete="off"
                          required
                          style={{ color: "black" }}
                          className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  )}

                  {!usePassword && (
                    <div className="text-sm">
                      <button
                        type="button"
                        onClick={handleSendCode}
                        className="font-semibold text-green-600 hover:text-green-500"
                        disabled={countdown > 0}
                      >
                        {countdown > 0 ? `Resend in ${countdown} seconds` : "Send verification code"}
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
                    onClick={handleCloseSecondAndOpenFirst}
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </ModalHeader>
          </ModalContent>
        </div>
      </Modal>
    </>
  );
}

