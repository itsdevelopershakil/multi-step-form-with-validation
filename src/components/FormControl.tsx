"use client";

import { formValidation } from "@/utils/ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ButtonControl from "./ButtonControl";

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

  const handleSubmit = () => {
    const formData = getValues();
    console.log(formData);
  };

  return (
    <div className="w-[60%] p-10">
      <form>
        {currentStep === 0 && (
          <>
            <div className="mt-2">
              <input
                type="text"
                id="fullName"
                {...register("fullName")}
                autoComplete="fullName"
                className="border border-gray-400 rounded"
              />
              {errors.fullName?.message && (
                <p className="">{errors.fullName.message}</p>
              )}
            </div>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                {...register("email")}
                autoComplete="email"
                className="border border-gray-400 rounded"
              />
              {errors.email?.message && (
                <p className="">{errors.email.message}</p>
              )}
            </div>
            <div className="mt-2">
              <input
                type="number"
                id="phoneNumber"
                {...register("phoneNumber")}
                autoComplete="phoneNumber"
                className="border border-gray-400 rounded"
              />
              {errors.phoneNumber?.message && (
                <p className="">{errors.phoneNumber.message}</p>
              )}
            </div>
          </>
        )}
        {currentStep === 1 && (
          <>
            <div className="mt-2">
              <input
                type="text"
                id="streetAddress"
                {...register("streetAddress")}
                autoComplete="streetAddress"
                className="border border-gray-400 rounded"
              />
              {errors.streetAddress?.message && (
                <p className="">{errors.streetAddress.message}</p>
              )}
            </div>
            <div className="mt-2">
              <input
                type="text"
                id="city"
                {...register("city")}
                autoComplete="city"
                className="border border-gray-400 rounded"
              />
              {errors.city?.message && (
                <p className="">{errors.city.message}</p>
              )}
            </div>
            <div className="mt-2">
              <input
                type="number"
                id="zipCode"
                {...register("zipCode")}
                autoComplete="phoneNumber"
                className="border border-gray-400 rounded"
              />
              {errors.zipCode?.message && (
                <p className="">{errors.zipCode.message}</p>
              )}
            </div>
          </>
        )}
        {currentStep === 2 && (
          <>
            <div className="mt-2">
              <input
                type="text"
                id="userName"
                {...register("userName")}
                autoComplete="userName"
                className="border border-gray-400 rounded"
              />
              {errors.userName?.message && (
                <p className="">{errors.userName.message}</p>
              )}
            </div>
            <div className="mt-2">
              <input
                type="password"
                id="passWord"
                {...register("passWord")}
                className="border border-gray-400 rounded"
              />
              {errors.passWord?.message && (
                <p className="">{errors.passWord.message}</p>
              )}
            </div>
            <div className="mt-2">
              <input
                type="password"
                id="confirmPassWord"
                {...register("confirmPassWord")}
                className="border border-gray-400 rounded"
              />
              {errors.confirmPassWord?.message && (
                <p className="">{errors.confirmPassWord.message}</p>
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
    </div>
  );
};

export default FormControl;
