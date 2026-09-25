'use client'

import { useContext, useState } from "react";
import SummeryBord from "../components/myPlane/SummeryBord";
import { libContext, sharedType } from "@/context/libContext";
import EmptyPOrS from "../components/myPlane/emptyPOrS";

export default function MyPlanPage() {
  const {myPlan,saved} = useContext<sharedType>(libContext)
  const [tabState, setTabState] = useState<'myPlane' | 'saved'>('myPlane')
  const handleTabState = (clickState: 'myPlane' | 'saved') => {
    if(clickState === 'myPlane'){
      setTabState('myPlane')
    }else{
      setTabState('saved')
    }
  }
  return (
    <div className="px-2 lg:px-0">
      <div className="container mx-auto pt-12">
        <h2 className="text-white text-[30px] font-bold">MY PLAN</h2>
        <h5 className="text-[14px] font-medium text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </h5>
        {
          tabState === 'myPlane' ? <SummeryBord planOrsave = {myPlan}  /> : <SummeryBord planOrsave = {saved}  />
        }
          
        <div className="grid grid-cols-2 justify-between items-center pt-12 pb-8">
          <div>
            <div className="w-60 p-1.5 rounded-[10px] bg-[#151921]">
              <button onClick={() => handleTabState('myPlane')} className={`text-[12px] px-8 py-2.5  ${tabState === 'myPlane' ? 'text-white bg-[#1F242D] rounded-[10px]' : 'text-[#8A92A0]'}`}>Today’s Plan</button>
              <button onClick={() => handleTabState('saved')} className={`text-[12px]  px-8 py-2.5 ${tabState === 'saved' ? 'text-white bg-[#1F242D]  rounded-[10px]' : 'text-[#8A92A0]'}`}>Saved</button>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4">
            <p>Sort By </p>
            <select defaultValue="Pick a color" className="select bg-black">
              <option disabled={true}>Pick a color</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>

        </div>
          <div>
            {
              // tabState === 'myPlane' ? <EmptyPOrS /> : null
            }
          </div>
      </div>
    </div>
  );
}
