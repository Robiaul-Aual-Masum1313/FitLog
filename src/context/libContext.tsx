"use client";
import { DataTypes } from "@/types/libraryDataType";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
export interface sharedType {
  myPlan: DataTypes[];
  setMyPlan: Dispatch<SetStateAction<DataTypes[]>>;
  saved: DataTypes[];
  setSaved: Dispatch<SetStateAction<DataTypes[]>>;
}

export const libContext = createContext<sharedType>({
    myPlan: [],
  setMyPlan: () => {},
  saved: [],
  setSaved: () => {}
});
export default function LibProvider({ children }: { children: ReactNode }) {
  const [myPlan, setMyPlan] = useState<DataTypes[]>([]);
  const [saved, setSaved] = useState<DataTypes[]>([]);
  const sharedValue: sharedType = {
    myPlan,
    setMyPlan,
    saved,
    setSaved,
  };
  return (
    <libContext.Provider value={sharedValue}>{children}</libContext.Provider>
  );
}
