import {CourseType} from "../types/CourseType.ts";


export const extractThemes = (courses: CourseType[]) => {
  const themes: string[] = []
  if (courses) {
    courses.forEach((course) => themes.push(...course.tags))
  }
  return [...new Set(themes)]
}