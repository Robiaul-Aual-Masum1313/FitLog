
import LibraryCard from "./LibraryCard";
import { DataTypes } from "@/types/libraryDataType";


export default async function Library() {
    const res =  await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data =  await res.json()
    // console.log(data);
    
  return (
    <div id="workout" className="px-2 lg:px-0">
        <div className="container mx-auto">
            <h2 className="text-[30px] font-bold text-white">THE LIBRARY</h2>
            <h5 className="text-[#9CA3AF] font-medium text-[14px]">Twelve lifts covering every major muscle group.</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5 lg:gap-10 pt-8">
                {
                    data.map((item: DataTypes) => <LibraryCard key={item.id} datap = {item} />)
                }
                
            </div>
        </div>
    </div>
  )
}
