"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { TFormData } from "./FormControl";

type FormPreviewModalT = {
  formData: TFormData;
  close: React.Dispatch<React.SetStateAction<number>>;
};

const FormPreviewModal = ({ formData, close }: FormPreviewModalT) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();
  const {
    city,
    email,
    fullName,
    phoneNumber,
    streetAddress,
    userName,
    zipCode,
  } = formData;

  useEffect(() => {
    const closeModal = (e: MouseEvent) =>
      formRef.current &&
      !formRef.current.contains(e.target as Node) &&
      close(2);

    document.addEventListener("mousedown", closeModal);
    return () => document.removeEventListener("mousedown", closeModal);
  }, [close]);

  const handleEdit = () => {
    close(0);
  };

  const handleSubmit = () => {
    console.log(formData);
    router.push("/result");
  };

  return (
    <div className="fixed top-0 left-0 h-screen max-h-screen w-full bg-black/50 flex items-center justify-center py-10 px-4 overflow-y-auto">
      <form
        className="bg-white w-full max-w-[600px] p-10 rounded-lg"
        ref={formRef}
      >
        <h1 className="text-center text-xl font-medium mb-5">
          Confirm Your Information
        </h1>
        <label htmlFor="fullName">Full Name</label>
        <div className="mt-2">
          <input
            type="text"
            readOnly
            value={fullName}
            id="fullName"
            className="border border-gray-300 outline-none rounded block w-full p-2"
          />
        </div>
        <label htmlFor="userName" className="mt-2 block">
          Username
        </label>
        <div className="mt-2">
          <input
            type="text"
            readOnly
            value={userName}
            id="userName"
            className="border border-gray-300 outline-none rounded block w-full p-2"
          />
        </div>
        <label htmlFor="email" className="mt-2 block">
          Email Address
        </label>
        <div className="mt-2">
          <input
            type="email"
            readOnly
            value={email}
            id="email"
            className="border border-gray-300 outline-none rounded block w-full p-2"
          />
        </div>
        <label htmlFor="phoneNumber" className="mt-2 block">
          Phone Number
        </label>
        <div className="mt-2">
          <input
            type="number"
            readOnly
            value={phoneNumber}
            id="phoneNumber"
            className="border border-gray-300 outline-none rounded block w-full p-2"
          />
        </div>
        <label htmlFor="phoneNumber" className="mt-2 block">
          Street Address
        </label>
        <div className="mt-2">
          <input
            type="text"
            readOnly
            value={streetAddress}
            id="streetAddress"
            className="border border-gray-300 outline-none rounded block w-full p-2"
          />
        </div>
        <label htmlFor="city" className="mt-2 block">
          City
        </label>
        <div className="mt-2">
          <input
            type="text"
            readOnly
            value={city}
            id="city"
            className="border border-gray-300 outline-none rounded block w-full p-2"
          />
        </div>
        <label htmlFor="zipCode" className="mt-2 block">
          Zip Code
        </label>
        <div className="mt-2">
          <input
            type="number"
            readOnly
            value={zipCode}
            id="zipCode"
            className="border border-gray-300 outline-none rounded block w-full p-2"
          />
        </div>
        <div className="flex justify-between mt-5">
          <button
            type="button"
            className="px-8 py-2 rounded border border-gray-400 bg-transparent text-sm font-semibold cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="px-8 py-2 rounded bg-primary text-white text-sm font-semibold cursor-pointer"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPreviewModal;
