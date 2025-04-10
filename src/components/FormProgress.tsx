type FormProgressT = {
  step: number;
};

const FormProgress = ({ step }: FormProgressT) => {
  return (
    <div className="flex items-center gap-2">
      <span className="size-2 rounded-full border-primary border-2 shrink-0"></span>
      <span className="grow h-[2px] bg-primary block"></span>
      <span className="size-2 rounded-full border-primary border-2 shrink-0"></span>
      <span
        className={`grow h-[2px] block ${
          step > 0 ? "bg-primary" : "bg-gray-200"
        }`}
      ></span>
      <span
        className={`size-2 rounded-full border-2 shrink-0 ${
          step > 0 ? "border-primary" : "border-gray-400"
        }`}
      ></span>
      <span
        className={`grow h-[2px] block ${
          step > 1 ? "bg-primary" : "bg-gray-200"
        }`}
      ></span>
      <span
        className={`size-2 rounded-full border-2 shrink-0 ${
          step > 1 ? "border-primary" : "border-gray-400"
        }`}
      ></span>
    </div>
  );
};

export default FormProgress;
