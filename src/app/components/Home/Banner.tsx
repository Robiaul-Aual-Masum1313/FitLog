import Image from "next/image";
import HeroImage from '@/assets/banner.png'


export default function Banner() {
  return (
    <div className="container mx-auto bg-[#15171D] border border-[#222630] rounded-[20px] my-12 grid grid-cols-1 items-center gap-5 p-16  lg:grid-cols-2">
        <div className=" space-y-6">
            <h6 className="text-[11px] font-bold text-[#C2F800]">WORKOUT LIBRARY</h6>
            <h2 className="text-[60px] text-white font-extrabold leading-15">TRAIN WITH INTENT. LOG EVERY SET.</h2>
            <p className="text-[16px] text-[#9CA3AF] font-medium">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
            <button className="bg-[#C2F800] px-6 py-2.5 text-black text-[12px] font-bold rounded-md">BROWSE WORKOUTS</button>
        </div>
        <div className="flex justify-end">
            <Image className="" src={HeroImage} alt='Fit Log Hero image' />
        </div>
    </div>
  )
}
