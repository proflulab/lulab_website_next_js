/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, Button, useDisclosure } from "@nextui-org/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Grid, Link } from "@mui/material";
import { useRouter } from 'next/navigation';
import styles from './Signin.module.css';  // style

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState("");
  const [useEmail, setUseEmail] = useState(true);
  const [usePassword, setUsePassword] = useState(true);
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const router = useRouter(); 
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { isOpen: isSignupOpen, onOpen: onSignupOpen, onOpenChange: onSignupOpenChange, onClose: onSignupClose } = useDisclosure();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (value) => {
    const cleanedPhone = value.replace(/[^0-9]/g, '');
    setPhone(cleanedPhone);
  };

  const handleSendCode = () => {
    setVerificationCodeSent(true);
    setCountdown(60);

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      setVerificationCodeSent(false);
    }, 60000);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // Handle signup logic here
  };

  const handleCloseFirstAndOpenSecond = () => {
    onClose();
    onSignupOpen();
  };

  const handleCloseSecondAndOpenFirst = () => {
    onSignupClose();
    onOpen();
  };

  return (
    <>
      <Button onPress={onOpen} style={{ backgroundColor: "black", color: "white" }}>Sign in</Button>

      <Modal
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          base: "bg-white",
          
        }}
      >
        <ModalContent className={`${styles.autofillFix}`}>
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
              <form className="space-y-6" action="#" method="POST">
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
                        className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6 ${styles.autofillFix}`}
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
                    
                    <PhoneInput
                      country={"cn"}
                      value={phone}
                      onChange={handleChange}
                      inputClass={`${styles.autofillFix}`}
                      inputStyle={{
                        width: "100%",
                        height: "40px",
                        fontSize: "16px",
                        borderRadius: "4px",
                        borderColor: "#ccc",
                        color: "black",
                      }}
                      isValid={(value, country) => {
                        if (country.countryCode === 'cn') {
                          return value.replace(/[^0-9]/g, '').length <= 11;
                        }
                        return true;
                      }}
                      masks={{ cn: '...........' }} // Custom mask to remove default formatting
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
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2 relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6 pr-10 ${styles.autofillFix}`}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none text-gray-500" // 添加 text-black
                      >
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                      </button>
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
                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                      />
                      <div className="mt-6">
                        <button
                          type="button"
                          onClick={handleSendCode}
                          disabled={verificationCodeSent}
                          className="font-semibold text-green-600 hover:text-green-500"
                        >
                          {verificationCodeSent
                            ? `Resend in ${countdown} seconds`
                            : "Send verification code"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

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
                  style={{
                    color: "green",
                    textDecoration: "none",
                  }}
                  onClick={handleCloseFirstAndOpenSecond} 
                >
                  Sign up
                </Link>
              </p>
            </div>
          </ModalHeader>
        </ModalContent>
      </Modal>

      <Modal
        backdrop="opaque" 
        isOpen={isSignupOpen} 
        onOpenChange={onSignupOpenChange}
        radius="lg"
        classNames={{
          base: "bg-white",
        }}
      >
        <ModalContent className={`${styles.autofillFix}`}>
          <ModalHeader className="flex flex-col gap-1"> 
            <img
              className="mx-auto h-20 w-auto"
              src="/logo.png"
              alt="Your Company"
            />
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
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
                          className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6 ${styles.autofillFix}`}
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
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="current-password"
                          required
                          className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6 pr-10 ${styles.autofillFix}`}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none text-gray-500" // 添加 text-black
                        >
                          <FontAwesomeIcon icon={showPassword ?faEye : faEyeSlash } />
                        </button>
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
                    <PhoneInput
                      country={"us"}
                      value={phone}
                      onChange={handleChange}
                      inputClass={`${styles.autofillFix}`}
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
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                    />
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
                  style={{
                    color: "green",
                    textDecoration: "none",
                  }}
                  onClick={handleCloseSecondAndOpenFirst} 
                >
                  Sign in
                </Link>
              </p>
            </div>
          </ModalHeader>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Signin;
