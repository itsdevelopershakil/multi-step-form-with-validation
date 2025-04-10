import logo from "@/assets/images/logo.png";
import Image from "next/image";
import ThemeControl from "./ThemeControl";

const FormContent = () => {
  return (
    <div className="w-[40%] bg-primary p-10 relative">
      <ThemeControl />
      <Image src={logo} alt="Brand Logo" />
      <h1 className="text-4xl font-semibold text-white mt-10">
        Let&apos;s Setup your Operating Agreement
      </h1>
      <p className="text-white/80 mt-10">
        All-in-one solution to for your business in the state. Form a new
        company from scratch or onboard your exiting US company.{" "}
      </p>
    </div>
  );
};

export default FormContent;
