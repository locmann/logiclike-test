import {createContext, useContext} from "react";
import {CourseType} from "../types/CourseType.ts";

type ContextType = {
  filter: string
  courses: CourseType[]
  themes: string[],
  setFilter: (theme: string) => void
}

export const AppContext = createContext<ContextType | undefined>(undefined)

export const useAppContext = () => {
  const contextData = useContext(AppContext)

  if (contextData === undefined) {
    throw new Error('Context error')
  }

  return contextData
}