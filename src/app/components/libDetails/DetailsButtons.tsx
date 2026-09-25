'use client'
import { libContext, sharedType } from "@/context/libContext";
import { DataTypes } from "@/types/libraryDataType";
import { useContext } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

export interface DetailsButtonsProps {
  data: DataTypes;
}

const DetailsButtons = ({ data }: DetailsButtonsProps) => {
    const {myPlan,setMyPlan,saved,setSaved} = useContext<sharedType>(libContext)
    const handleMyPlan = (singleMyPlane: DataTypes) => {
        const isExist = myPlan.some(item => item.id === singleMyPlane.id)
        if(isExist){
            toast.error(`${singleMyPlane.name} is already is on your 'My Plane'`)
        }else{
            setMyPlan([...myPlan, singleMyPlane])
            toast.success(`${singleMyPlane.name} is added to your 'My Plane'`)
        }
    }
    const handleSaved = (singleMyPlane: DataTypes) => {
        const isExist = saved.some(item => item.id === singleMyPlane.id)
        if(isExist){
            toast.error(`${singleMyPlane.name} is already is on your 'Saved'`)
        }else{
            setSaved([...saved, singleMyPlane])
            toast.success(`${singleMyPlane.name} is added to your 'Saved'`)
        }
    }
    console.log(myPlan);
    
  return (
    <>
      <button onClick={() => handleMyPlan(data)} className="flex justify-start items-center gap-2.5 text-[#0F1115] bg-[#CCFF00] py-2.5  px-5.5 rounded-lg font-semibold text-[14px]">
        <CiCalendarDate />
        Add to today's plan
      </button>
      <button onClick={() => handleSaved(data)} className="flex justify-start items-center gap-2.5 border border-[#374151] text-[#E5E7EB]  py-2.5  px-5.5 rounded-lg font-medium text-[14px]">
        <FaRegBookmark />
        Save for later
      </button>
    </>
  );
};

export default DetailsButtons;
