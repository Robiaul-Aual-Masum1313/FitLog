import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen space-y-5">
      <h2 className="text-[40px] lg:text-[60px] text-white font-extrabold">Your Desired page not Found</h2>
      <p className="text-[16px] text-[#9CA3AF] font-medium">You can visit Workouts</p>
      <Link href={"/"}>
        <button className="bg-[#C2F800] px-6 py-2.5 text-black text-[12px] font-bold rounded-md">
          BROWSE WORKOUTS
        </button>
      </Link>
    </div>
  );
}
