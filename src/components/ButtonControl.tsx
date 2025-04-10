"use client";

import { TFormData } from "./FormControl";

type ButtonControlT = {
  step: number;
  handleStep: React.Dispatch<React.SetStateAction<number>>;
  trigger: (arg?: (keyof TFormData)[]) => Promise<boolean>;
};

const ButtonControl = ({ step, handleStep, trigger }: ButtonControlT) => {
  const handleChange = async (type: string) => {
    if (type === "prev") {
      handleStep((prev) => prev - 1);
    } else {
      let filledValue: (keyof TFormData)[] = [];
      if (step === 0) {
        filledValue = ["fullName", "email", "phoneNumber"];
      } else if (step === 1) {
        filledValue = ["streetAddress", "city", "zipCode"];
      } else if (step === 2) {
        filledValue = ["userName", "passWord", "confirmPassWord"];
      }

      const isValid = await trigger(filledValue);
      if (isValid) {
        handleStep((prev) => prev + 1);
      }
    }
  };
  return (
    <div className="flex justify-between mt-10">
      <button
        type="button"
        onClick={() => handleChange("prev")}
        disabled={step === 0}
        className="bg-primary px-10 py-2 text-white rounded text-sm font-semibold disabled:bg-primary/50 cursor-pointer"
      >
        Prev
      </button>
      <button
        type="button"
        onClick={() => handleChange("next")}
        disabled={step === 3}
        className="bg-primary px-10 py-2 text-white rounded text-sm font-semibold disabled:bg-primary/50 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default ButtonControl;
