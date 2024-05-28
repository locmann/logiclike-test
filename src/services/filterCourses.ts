import {CourseType} from "../types/CourseType.ts";


export const filterCourses = (courses: CourseType[], filter: string) => {

  if (filter === 'Все темы') return courses

  return courses.filter((course) => course.tags.includes(filter))

}