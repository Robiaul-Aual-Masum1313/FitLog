"use client";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();
  const navLinks = (
    <>
      <li>
        <Link
          className={`text-[12px] font-medium px-4 py-2 ${pathName === "/" ? "bg-[#1A2312] text-[#C2F800] rounded-full" : "text-[#9CA3AF]"}`}
          href={"/"}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          className={`text-[12px] font-medium px-4 py-2 ${pathName === "/myplan" ? "bg-[#1A2312] text-[#C2F800] rounded-full" : "text-[#9CA3AF]"}`}
          href={"/myplan"}
        >
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar shadow-sm bg-[rgba(12,13,16,0.95)] border-b border-[#1C1F26] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="mr-3.5 text-white lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <Link href={"/"}>
            <div className="flex gap-1.5 items-center">
              <Image
                className="w-4.5 h-4.5 lg:w-auto h-auto"
                src={Logo}
                alt=""
              />
              <h2 className="text-white text-[18px] font-black">FITLOG</h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <button className="text-[#D1D5DB] font-medium text-[12px]">
              Plan
              <span className="bg-[#C2F800] rounded-full text-black px-1.5 py-0.5 ml-2 text-[11px] font-bold">
                0
              </span>
            </button>
            <button className="text-[#D1D5DB] font-medium text-[12px] ml-5">
              Saved
              <span className="border border-[#EEEEEE80] rounded-full px-1.5 py-0.5 ml-2 text-[11px] font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    //   <div className="bg-[rgba(12,13,16,0.95)] border-b border-[#1C1F26] py-4">
    //     <div className="container mx-auto flex justify-between items-center">
    //       <div className="flex gap-1.5">
    //         <Image src={Logo} alt="" />
    //         <h2 className="text-white text-[18px] font-black">FITLOG</h2>
    //       </div>
    //       <nav>
    //         <ul className="flex gap-3.5">
    //           <li>
    //             <Link className={`text-[12px] font-medium px-4 py-2 ${pathName === '/' ? 'bg-[#1A2312] text-[#C2F800] rounded-full' : 'text-[#9CA3AF]'}`} href={'/'}>Workouts</Link>
    //           </li>
    //           <li>
    //             <Link className={`text-[12px] font-medium px-4 py-2 ${pathName === '/myplan' ? 'bg-[#1A2312] text-[#C2F800] rounded-full' : 'text-[#9CA3AF]'}`} href={'/myplan'}>My Plan</Link>
    //           </li>
    //         </ul>
    //       </nav>
    //       <div>
    //         <button className="text-[#D1D5DB] font-medium text-[12px]">
    //           Plan
    //           <span className="bg-[#C2F800] rounded-full text-black px-1.5 py-0.5 ml-2 text-[11px] font-bold">0</span>
    //         </button>
    //         <button className="text-[#D1D5DB] font-medium text-[12px] ml-5">
    //           Saved
    //           <span className="border border-[#EEEEEE80] rounded-full px-1.5 py-0.5 ml-2 text-[11px] font-bold">0</span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
  );
}
