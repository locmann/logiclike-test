import {useQuery} from "@tanstack/react-query";
import {CourseType} from "../types/CourseType.ts";

export const useGetCourses = (): CourseType[] => {

  const {data} = useQuery({
    queryKey: ['courses'],
    queryFn: () => fetch('https://logiclike.com/docs/courses.json').then((res) => res.json())
  })

  return data
}