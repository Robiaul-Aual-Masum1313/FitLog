'use client'
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

export default function CompleteButton() {
    const [isCompleted , setIsCompleted] = useState<boolean>(false)
  return (
    <button onClick={() => {
      setIsCompleted(true)
      toast.success('Marked as Completed')
      }} className="cursor-pointer flex justify-start items-center gap-2.5 text-black bg-[#CCFF00] py-2.5  px-5.5 rounded-[20px] font-semibold text-[12px]">
      <FaCheck /> {isCompleted ? 'Completed' : 'Mark as Done'}
    </button>
  );
}
