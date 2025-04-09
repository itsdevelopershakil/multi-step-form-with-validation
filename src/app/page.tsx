import FormContent from "@/components/FormContent";
import FormControl from "@/components/FormControl";

export default function Home() {
  return (
    <div className="p-[200px] flex justify-center min-h-screen bg-[#D3D8DF]">
      <div className="flex size-full bg-white">
        <FormContent />
        <FormControl />
      </div>
    </div>
  );
}
