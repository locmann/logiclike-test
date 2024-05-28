import Course from "../Course/Course.tsx";
import styles from './MainScreen.module.scss'
import {useAppContext} from "../../services/context.ts";
import {filterCourses} from "../../services/filterCourses.ts";

const MainScreen = () => {

  const {courses, filter} = useAppContext()

  if (courses === undefined) return

  return (<div className={styles.wrapper}>
    {filterCourses(courses, filter).map(course => <Course course={course} key={course.id} />)}
  </div>)
}

export default MainScreen