import { DataTypes } from "@/types/libraryDataType";
import Image from "next/image";
import Watchc from "@/assets/watchc.png";
import Kaloric from "@/assets/kaloric.png";
import Ratingc from "@/assets/ratingc.png";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { useContext } from "react";
import { libContext, sharedType } from "@/context/libContext";

export interface SavedCardProps {
  saveSData: DataTypes;
}

const SavedCard = ({ saveSData }: SavedCardProps) => {
  const {saved,setSaved} = useContext<sharedType>(libContext)
  const handleRemoveplan = (removeData: DataTypes) => {
  const afterRemoved = saved.filter(item => removeData.id  !== item.id)
  setSaved(afterRemoved)

  }
  return (
    <div className="flex justify-between items-center flex-col md:flex-row gap-8 bg-[#14171E] p-2 md:p-5 border border-[#232732] rounded-[10px] mb-5">
      <div className="flex justify-start items-center gap-3.5 md:gap-7">
        <div>
          <Image
            className="w-42 h-20 object-cover object-top rounded-[13px]"
            src={saveSData.image}
            alt={saveSData.name}
            width={150}
            height={80}
          />
        </div>
        <div className="space-y-1">
          <h2 className="text-white text-[16px] font-bold">{saveSData.name}</h2>
          <h5 className="text-[#8A92A0] text-[12px] font-semibold">
            {saveSData.equipment}
          </h5>
          <div>
            <div className="flex justify-start gap-2 text-[#D1D5DB] text-[12px] font-medium">
              <div className="flex justify-start items-center gap-1.5">
                <Image src={Watchc} alt="Watch" />
                {saveSData.duration} min
              </div>
              <div className="flex justify-start items-center gap-1.5">
                <Image src={Kaloric} alt="Kalori" />
                {saveSData.caloriesBurned} kcal
              </div>
              <div className="flex justify-start items-center gap-1.5">
                <Image src={Ratingc} alt="Rating" /> {saveSData.rating}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 items-center">
        <Link href={`/${saveSData.id}`}>
          <button className="cursor-pointer border border-[#374151] text-white  py-2.5  px-5.5 rounded-[20px] font-medium text-[12px]">
            View Details
          </button>
        </Link>
        <button onClick={() => handleRemoveplan(saveSData)} className="cursor-pointer">
          <RxCross2 className="text-[#6B7280]" />
        </button>
      </div>
    </div>
  );
};

export default SavedCard;
