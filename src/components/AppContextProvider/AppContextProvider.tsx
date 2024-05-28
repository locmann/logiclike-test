import {AppContext} from "../../services/context.ts";
import {PropsWithChildren, useState} from "react";
import {CourseType} from "../../types/CourseType.ts";

type PropsType = {
  courses: CourseType[]
  themes: string[]
} & PropsWithChildren

const AppContextProvider = ({children, themes, courses}: PropsType) => {

  const [filter, setFilter] = useState('Все темы')

  return <AppContext.Provider value={{filter, setFilter, themes, courses}}>
    {children}
  </AppContext.Provider>
}

export default AppContextProvider