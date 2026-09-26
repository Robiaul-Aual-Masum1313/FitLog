import { DataTypes } from "@/types/libraryDataType";
import EmptyPOrS from "./emptyPOrS";
import SavedCard from "./savedCard";
export interface SaveProps {
    saveData: DataTypes[]
}

const Save = ({ saveData }: SaveProps) => {
    
    return (
        <>
            {
                saveData.length === 0 ? <EmptyPOrS /> : saveData.map(item => <SavedCard key={item.id} saveSData = {item} />)
            }
        </>
    )
}

export default Save;