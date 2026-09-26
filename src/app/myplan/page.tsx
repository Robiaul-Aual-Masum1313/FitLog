'use client'

import { useContext, useState } from "react";
import SummeryBord from "../components/myPlane/SummeryBord";
import { libContext, sharedType } from "@/context/libContext";
import Save from "../components/myPlane/save";
import MyPlane2 from "../components/myPlane/myPlane2";

export default function MyPlanPage() {
  const {myPlan,setMyPlan,saved,setSaved} = useContext<sharedType>(libContext)
  const [tabState, setTabState] = useState<'myPlane' | 'saved'>('myPlane')
  const [sortBy, setSortBy] = useState<'rating' | 'calories' | 'duration'>( 'duration')
  const handleTabState = (clickState: 'myPlane' | 'saved') => {
    if(clickState === 'myPlane'){
      setTabState('myPlane')
    }else{
      setTabState('saved')
    }
  }
  const handleSort = (sortType :'rating' | 'calories' | 'duration') => {
    const newMyplane = [...myPlan]
    const newSaved = [...saved]
    if(tabState === 'myPlane'){
      if(sortType === 'calories'){
        newMyplane.sort((a,b) => b.caloriesBurned -a.caloriesBurned)
        setMyPlan(newMyplane)
      }
      if(sortType === 'rating'){
        newMyplane.sort((a,b) => b.rating -a.rating)
        setMyPlan(newMyplane)
      }
      if(sortType === 'duration'){
        newMyplane.sort((a,b) => b.duration -a.duration)
        setMyPlan(newMyplane)
      }
    }
    if(tabState === 'saved'){
      if(sortType === 'calories'){
        newSaved.sort((a,b) => b.caloriesBurned -a.caloriesBurned)
        setSaved(newSaved)
      }
      if(sortType === 'rating'){
        newSaved.sort((a,b) => b.rating -a.rating)
        setSaved(newSaved)
      }
      if(sortType === 'duration'){
        newSaved.sort((a,b) => b.duration -a.duration)
        setSaved(newSaved)
      }
    }
  }
  console.log(sortBy);
  
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
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 justify-between items-center pt-12 pb-8">
          <div className="mx-auto lg:mx-0">
            <div className="w-60 p-1.5 rounded-[10px] bg-[#151921]">
              <button onClick={() => handleTabState('myPlane')} className={`cursor-pointer text-[12px] px-8 py-2.5  ${tabState === 'myPlane' ? 'text-white bg-[#1F242D] rounded-[10px]' : 'text-[#8A92A0]'}`}>Today’s Plan</button>
              <button onClick={() => handleTabState('saved')} className={`cursor-pointer text-[12px]  px-8 py-2.5 ${tabState === 'saved' ? 'text-white bg-[#1F242D]  rounded-[10px]' : 'text-[#8A92A0]'}`}>Saved</button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end items-center gap-4">
            <p className="text-[#8A92A0] text-[12px] font-medium">Sort By </p>
            <select value={sortBy} onChange={(e) => {
              setSortBy(e.target.value as 'rating' | 'calories' | 'duration') 
              handleSort(e.target.value as 'rating' | 'calories' | 'duration')
              }} className="select bg-[#13161D] text-white text-[12px] font-medium">
              {/* <option disabled={true}>Pick a color</option> */}
              <option value={'duration'}>Duration</option>
              <option value={'calories'}>Calories</option>
              <option value={'rating'}>Rating</option>
            </select>
          </div>

        </div>
          <div>
            {
              tabState === 'myPlane' ? <MyPlane2 planeData = {myPlan} /> : <Save saveData = {saved}/>
            }
          </div>
      </div>
    </div>
  );
}
