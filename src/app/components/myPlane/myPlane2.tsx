import { DataTypes } from "@/types/libraryDataType";
import EmptyPOrS from "./emptyPOrS";
import MyPlaneCard from "./MyPlaneCard";

export interface MyPlaneProps {
    planeData: DataTypes[]
}

const MyPlane2 = ({ planeData }: MyPlaneProps) => {
    
    return (
        <>
            {
                planeData.length === 0 ? <EmptyPOrS /> : planeData.map(item => <MyPlaneCard key={item.id} planData = {item} />)
            }
        </>
    )
}

export default MyPlane2;