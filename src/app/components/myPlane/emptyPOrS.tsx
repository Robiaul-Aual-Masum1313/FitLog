import Link from "next/link";


export default function EmptyPOrS() {
  return (
    <div className="border border-[#FFFFFF1A] border-dashed py-24 text-center rounded-[10px]">
        <h2 className="text-white text-[20px] font-bold">NOTHING HERE YET</h2>
        <h5 className="text-[#A1A1AA] text-[12px] font-medium pb-8" >Browse the library and add a lift to get today moving.</h5>
        <Link href={'/'}>
        <button className="cursor-pointer text-[#0F1115] bg-[#CCFF00] py-2.5  px-5.5 rounded-lg font-semibold text-[14px]">Go to workouts</button>
        </Link>
    </div>
  )
}
