import Image from "next/image";
import FooterLogo from "@/assets/footerLogo.png";

export default function Footer() {
  return (
    <div className="bg-[#090A0D] py-10 border-[#1A1D24] border-t mt-28 px-2 lg:px-0">
      <div className="container mx-auto flex items-center md:justify-between flex-col md:flex-row">
        <div className="flex justify-start gap-1.5">
          <Image src={FooterLogo} alt="Logfit" />
          <h2 className="text-[14px] text-white font-bold">FITLOG</h2>
        </div>
        <div>
          <p className="text-[12px] text-[#6B7280] font-medium">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
}
