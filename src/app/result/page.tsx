import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center px-4 bg-gray-200">
      <div className="shadow px-4 py-10 rounded-lg text-center bg-white w-full max-w-[400px]">
        <h1 className="font-semibold text-xl">
          Thank You! Your Submission Was Successful.
        </h1>
        <p className="my-5">
          We&apos;ve received your information and everything looks good.
          We&apos;ll follow up shortly.
        </p>
        <Link
          href={"/"}
          className="text-sm px-5 py-2 rounded-lg border-primary border"
        >
          Submit Another Response
        </Link>
      </div>
    </div>
  );
};

export default page;
