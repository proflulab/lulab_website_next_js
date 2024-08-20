"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, Button, Link } from "@nextui-org/react";
import { MuiTelInput } from "mui-tel-input";

export default function FirstModal() {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [useEmail, setUseEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [usePassword, setUsePassword] = useState(true);

  const handleOpenFirst = () => {
    setIsOpenFirst(true);
	 export default function firstmodal() {
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
export default function firstmodal() {
    }, 60000);
  };

  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your signup logic here
  };

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
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <img className="mx-auto h-20 w-auto" src="/logo.png" alt="Your Company" />
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up for an account
            </h2>
 default function firstmodal() {
                {useEmail ? (
                  <>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
	export default function firstmodal() {
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
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
	@@ -132,13 +128,125 @@ export default function firstmodal() {
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone number
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <MuiTelInput
                        onChange={handleChangePhone}
                        value={phone}
                        className="block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                      />
                    </div>
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
                      className="block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
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
                        className="block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label
	@@ -151,28 +259,33 @@ export default function firstmodal() {
                      <MuiTelInput
                        onChange={handleChangePhone}
                        value={phone}
                        className="block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
                      />
                    </div>
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
	@@ -188,52 +301,58 @@ export default function firstmodal() {
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-green-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customGreen sm:text-sm sm:leading-6"
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
                      disabled={verificationCodeSent}
                    >
                      {verificationCodeSent
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