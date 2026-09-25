import { DataTypes } from "@/types/libraryDataType";
import Image from "next/image";
import Rating from "@/assets/rating.png";
import Kalori from "@/assets/kalori.png";
import Watch from "@/assets/watch.png";
import Link from "next/link";

export interface LibraryCardProps {
  datap: DataTypes;
}

const LibraryCard = ({ datap }: LibraryCardProps) => {
  // console.log(datap);

  return (
    <div className=" bg-[#15171D] rounded-[20px]">
      <Link href={`/${datap.id}`}>
        <Image
          className="w-full h-60 object-cover object-top rounded-t-[20px]"
          src={datap.image}
          alt={datap.name}
          width={500}
          height={300}
        />
        <div className="p-8 space-y-4">
          <div className="flex gap-2.5">
            {datap.muscleGroups.map((muscle) => (
              <button
                className="bg-[#C2F800] py-0.5  px-3.5 rounded-lg font-bold text-[11px]"
                key={muscle}
              >
                {muscle}
              </button>
            ))}
          </div>
          <div>
            <h2 className="text-[18px] font-bold text-white">{datap.name}</h2>
            <h5 className="text-[#9CA3AF] text-[12px] font-medium">
              {datap.equipment}
            </h5>
          </div>

          <div className="border-b border-[#20242E]"></div>
          <div className="flex justify-start gap-6 text-[#9CA3AF] text-[12px] font-medium">
            <div className="flex justify-start items-center gap-1.5">
              <Image src={Watch} alt="Watch" />
              {datap.duration}
            </div>
            <div className="flex justify-start items-center gap-1.5">
              <Image src={Kalori} alt="Kalori" />
              {datap.caloriesBurned}
            </div>
            <div className="flex justify-start items-center gap-1.5">
              <Image src={Rating} alt="Rating" /> {datap.rating}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LibraryCard;
