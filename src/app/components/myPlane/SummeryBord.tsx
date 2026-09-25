import { DataTypes } from "@/types/libraryDataType";

export interface SummeryBordProps {
  planOrsave: DataTypes[];
}

const SummeryBord = ({ planOrsave }: SummeryBordProps) => {
  return (
    <div className="grid grid-cols-3 items-center p-7 mt-6 bg-[#13161D] border border-[#232732] rounded-2xl">
      <div>
        <p className="text-[#8A92A0] text-[12px] font-medium">Exercises</p>
        <p className="text-[36px] font-bold text-[#CCFF00]">{planOrsave.length}</p>
      </div>
      <div className="border-x border-[#232732] pl-7.5">
        <p className="text-[#8A92A0] text-[12px] font-medium">Minutes</p>
        <p className="text-[36px] font-bold text-white">{planOrsave.reduce((acc,item: DataTypes) => acc + item.duration, 0)}</p>
      </div>
      <div className="pl-7.5">
        <p className="text-[#8A92A0] text-[12px] font-medium">Calories</p>
        <p className="text-[36px] font-bold text-white">{planOrsave.reduce((acc,item: DataTypes) => acc + item.caloriesBurned, 0)}</p>
      </div>
    </div>
  );
};

export default SummeryBord;
