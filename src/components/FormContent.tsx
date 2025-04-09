import logo from "@/assets/images/logo.png";
import Image from "next/image";

const FormContent = () => {
  return (
    <div className="w-[40%] bg-[#005EFF] p-10">
      <Image src={logo} alt="Brand Logo" />
      <h1>Let&apos;s Setup your Operating Agreement</h1>
      <p>
        All-in-one solution to for your business in the state. Form a new
        company from scratch or onboard your exiting US company.{" "}
      </p>
    </div>
  );
};

export default FormContent;
