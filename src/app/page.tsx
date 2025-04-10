import FormContent from "@/components/FormContent";
import FormControl from "@/components/FormControl";

export default function Home() {
  return (
    <div className="py-[200px] flex items-center justify-center min-h-screen bg-[#D3D8DF]">
      <div className="flex w-full max-w-[900px] bg-white">
        <FormContent />
        <FormControl />
      </div>
    </div>
  );
}
