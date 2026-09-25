import Image from "next/image";
import { DataTypes } from "../../types/libraryDataType";
import DetailsButtons from "../components/libDetails/DetailsButtons";

export interface PageProps {
  params: { libid: string };
}

const LibDetailPage = async ({ params }: PageProps) => {
  const { libid } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${libid}`);
  const data: DataTypes = await res.json();

  return (
    <div className="px-2 lg:px-0">
      <div className="container mx-auto pt-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-6.5">
        <div className="order-2 lg:order-1">
          <Image
            className="rounded-[10px]"
            src={data.image}
            alt={data.name}
            width={700}
            height={800}
          />
        </div>
        <div className="order-1 lg:order-2  space-y-5.5">
          <h2 className="text-white text-4xl font-bold">{data.name}</h2>
          <h5 className="font-medium text-[#9CA3AF] text-[16px]">
            {data.description}
          </h5>
          <div className="flex gap-2.5">
            {data.muscleGroups.map((muscle) => (
              <button
                className="bg-[#C2F800] py-1  px-4.5 rounded-lg font-semibold text-[12px]"
                key={muscle}
              >
                {muscle}
              </button>
            ))}
          </div>
          <div className="bg-[#151922] border border-[#232834] rounded-[15px] my-10">
            <div className="flex justify-between items-center px-7 py-3.5 border-b border-[#1E2330]">
              <p className="text-[#9CA3AF] text-[12px] font-bold">EQUIPMENT</p>
              <p className="text-[14px] font-medium text-[#E5E7EB]">
                {data.equipment}
              </p>
            </div>
            <div className="flex justify-between items-center px-7 py-3.5 border-b border-[#1E2330]">
              <p className="text-[#9CA3AF] text-[12px] font-bold">DIFFICULTY</p>
              <p className="text-[14px] font-medium text-[#E5E7EB]">
                {data.difficulty}
              </p>
            </div>
            <div className="flex justify-between items-center px-7 py-3.5 border-b border-[#1E2330]">
              <p className="text-[#9CA3AF] text-[12px] font-bold">SETS</p>
              <p className="text-[14px] font-medium text-[#E5E7EB]">
                {data.sets}
              </p>
            </div>
            <div className="flex justify-between items-center px-7 py-3.5 border-b border-[#1E2330]">
              <p className="text-[#9CA3AF] text-[12px] font-bold">REPS</p>
              <p className="text-[14px] font-medium text-[#E5E7EB]">
                {data.reps}
              </p>
            </div>
            <div className="flex justify-between items-center px-7 py-3.5 border-b border-[#1E2330]">
              <p className="text-[#9CA3AF] text-[12px] font-bold">DURATION</p>
              <p className="text-[14px] font-medium text-[#E5E7EB]">
                {data.duration} min
              </p>
            </div>
            <div className="flex justify-between items-center px-7 py-3.5 border-b border-[#1E2330]">
              <p className="text-[#9CA3AF] text-[12px] font-bold">CALORIES</p>
              <p className="text-[14px] font-medium text-[#E5E7EB]">
                {data.caloriesBurned} kcal
              </p>
            </div>
            <div className="flex justify-between items-center px-7 py-3.5">
              <p className="text-[#9CA3AF] text-[12px] font-bold">RATING</p>
              <p className="text-[14px] font-medium text-[#E5E7EB]">
                {data.rating}
              </p>
            </div>
          </div>
          <div className="space-y-3.5">
            <h2 className="text-[16px] font-extrabold text-white">
              INSTRUCTIONS
            </h2>
            <ol className="list-decimal list-inside text-[14px] text-[#D1D5DB] font-medium space-y-2.5">
              {data.instructions.map((instruction: string, index: number) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
          <div className="flex justify-start gap-5 pt-6">
              <DetailsButtons data = {data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibDetailPage;
