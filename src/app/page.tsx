import FormContent from "@/components/FormContent";
import FormControl from "@/components/FormControl";

export default function Home() {
  return (
    <div className="py-5 sm:py-10 flex items-center justify-center min-h-screen bg-[#D3D8DF] dark:bg-[#282828] overflow-y-auto">
      <div className="flex flex-wrap sm:flex-nowrap w-full max-w-[900px] bg-white dark:bg-[#171720]">
        <FormContent />
        <FormControl />
      </div>
    </div>
  );
}
