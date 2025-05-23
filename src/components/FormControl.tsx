"use client";

import { formValidation } from "@/utils/ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ButtonControl from "./ButtonControl";
import FormPreviewModal from "./FormPreviewModal";
import FormProgress from "./FormProgress";

export type TFormData = z.infer<typeof formValidation>;

const FormControl = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    formState: { errors },
    getValues,
    trigger,
  } = useForm<TFormData>({
    resolver: zodResolver(formValidation),
  });

  return (
    <div className="w-full sm:w-[60%] p-10">
      <FormProgress step={currentStep} />
      <h1 className="text-2xl font-medium my-8 dark:text-white">
        Let&apos;s get started
      </h1>
      <form>
        {currentStep === 0 && (
          <>
            <label htmlFor="fullName" className="dark:text-white">
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="fullName"
                {...register("fullName")}
                autoComplete="fullName"
                className="border border-gray-300 outline-none rounded block w-full p-2 dark:text-white"
              />
              {errors.fullName?.message && (
                <p className="text-xs text-red-600 mt-2">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <label htmlFor="email" className="mt-2 block dark:text-white">
              Email Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                {...register("email")}
                autoComplete="email"
                className="border border-gray-300 outline-none rounded block w-full p-2 dark:text-white"
              />
              {errors.email?.message && (
                <p className="text-xs text-red-600 mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <label htmlFor="phoneNumber" className="mt-2 block dark:text-white">
              Phone Number
            </label>
            <div className="mt-2">
              <input
                type="number"
                id="phoneNumber"
                {...register("phoneNumber")}
                autoComplete="phoneNumber"
                className="border border-gray-300 outline-none rounded block w-full p-2 dark:text-white"
              />
              {errors.phoneNumber?.message && (
                <p className="text-xs text-red-600 mt-2">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </>
        )}
        {currentStep === 1 && (
          <>
            <label htmlFor="streetAddress" className="dark:text-white">
              Street Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="streetAddress"
                {...register("streetAddress")}
                autoComplete="streetAddress"
                className="border border-gray-300 outline-none rounded block w-full p-2 dark:text-white"
              />
              {errors.streetAddress?.message && (
                <p className="text-xs text-red-600 mt-2">
                  {errors.streetAddress.message}
                </p>
              )}
            </div>
            <label htmlFor="city" className="mt-2 block dark:text-white">
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="city"
                {...register("city")}
                autoComplete="city"
                className="border border-gray-300 outline-none rounded block w-full p-2 dark:text-white"
              />
              {errors.city?.message && (
                <p className="text-xs text-red-600 mt-2">
                  {errors.city.message}
                </p>
              )}
            </div>
            <label htmlFor="zipCode" className="mt-2 block dark:text-white">
              Zip Code
            </label>
            <div className="mt-2">
              <input
                type="number"
                id="zipCode"
                {...register("zipCode")}
                autoComplete="phoneNumber"
                className="border border-gray-300 outline-none rounded block w-full p-2 dark:text-white"
              />
              {errors.zipCode?.message && (
                <p className="text-xs text-red-600 mt-2">
                  {errors.zipCode.message}
                </p>
              )}
            </div>
          </>
        )}
        {currentStep >= 2 && (
          <>
            <label htmlFor="userName" className="dark:text-white">
              User Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="userName"
                {...register("userName")}
                autoComplete="userName"
                className="border border-gray-300 outline-none rounded block w-full p-2 dark:text-white"
              />
              {errors.userName?.message && (
                <p className="text-xs text-red-600 mt-2">
                  {errors.userName.message}
                </p>
              )}
            </div>
            <label htmlFor="passWord" className="mt-2 block dark:text-white">
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="passWord"
                {...register("passWord")}
                className="border border-gray-300 outline-none rounded block w-full p-2 dark:text-white"
              />
              {errors.passWord?.message && (
                <p className="text-xs text-red-600 mt-2">
                  {errors.passWord.message}
                </p>
              )}
            </div>
            <label
              htmlFor="confirmPassWord"
              className="mt-2 block dark:text-white"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="confirmPassWord"
                {...register("confirmPassWord")}
                className="border border-gray-300 outline-none rounded block w-full p-2 dark:text-white"
              />
              {errors.confirmPassWord?.message && (
                <p className="text-xs text-red-600 mt-2">
                  {errors.confirmPassWord.message}
                </p>
              )}
            </div>
          </>
        )}
        <ButtonControl
          step={currentStep}
          handleStep={setCurrentStep}
          trigger={trigger}
        />
      </form>
      {currentStep === 3 && (
        <FormPreviewModal formData={getValues()} close={setCurrentStep} />
      )}
    </div>
  );
};

export default FormControl;
